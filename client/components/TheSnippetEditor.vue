<template>
  <section>
      <div class="key">
          <span>Hotkey</span>
          <input v-on:keyup="onSnippetChange" v-model="snippetKey" type="text">
      </div>
      <div class="textinput" v-on:keyup="onSnippetChange" >
          <textarea v-if="typeof activeSnippet.value === 'string'" v-model="snippetValue" name="snippetInput" id="" cols="30" rows="10" v-on:focus="showHelper=true" v-on:blur="showHelper=false"></textarea>
          <textarea v-else v-model="snippetValue" name="snippetInput" id="" cols="30" rows="10" v-on:focus="showHelper=true" v-on:blur="showHelper=false">
            
          </textarea>
            <transition name="fade" appear>
              <div class="highlight" v-show="showHighlits" v-html="highlited"></div>
            </transition>
            <transition name="logo-magic" appear>
              <div class="info-helper" v-show="showHelper">
                Variables have to be surrounded by '%'. <span v-on:mouseover="showHighlits=true" v-on:mouseleave="showHighlits=false">Preview</span> 
              </div>
            </transition>
      </div>

      <div v-if="id.includes('new') && !snippetSaved">
        <div v-on:click="onSnippetSave" class="action-btn">Save</div>
      </div>
      <div v-else>
        <!-- <div v-on:click="onSnippetUpdate" class="action-btn">Update</div> -->
        <div v-on:click="onSnippetDelete" class="action-btn">Delete</div>
      </div>
      <TheDeleteModal 
        :isModalOpen="isModalOpen"
        :id = "id"
        @modalClicked="onModalClicked"
      />
  </section>
</template>


<script>
import { mapGetters } from 'vuex'
import TheDeleteModal from './TheDeleteModal'
export default {
  components: {
    TheDeleteModal
  },
  data() {
    return {
      snippetKey: "",
      snippetValue: "",
      highlited: "",
      id: null,
      showHelper: false,
      showHighlits: false,
      snippetSaved: false,
      isModalOpen: false
    }
  },
  computed: {
    ...mapGetters([
      'activeSnippet'
    ]),
    currentStateOfEditedSnippet () {
      return this.isComplexSnippet
        ? this.prepareComplexSnippet
        : this.prepareSimpleSnippet
    },
    isComplexSnippet () {
      return this.snippetValue ? this.snippetValue.includes('%') : false
    },
    getVariables () {
      const variablesRegex = /%\w*%/g;
      const allFoundVariables = this.snippetValue.match(variablesRegex);
      // console.log('all')
      // console.log(allFoundVariables)
      // console.log('val')
      // console.log(this.snippetValue)
      const uniqueVariables = Array.from(new Set(allFoundVariables))
      return uniqueVariables
    },
    prepareSimpleSnippet () {
      return {
        id: this.id,
        key: this.snippetKey,
        value: this.snippetValue
      }
    },
    prepareComplexSnippet () {
      const inputs = [];
      this.getVariables.map(variable => {
        inputs.push({
          type: 'text',
          variable: variable.replace(/\%/g,''),
          value: ''
        })
      });

      return {
        id: this.id,
        key: this.snippetKey,
        value: {
          HTML: this.snippetValue,
          inputs: inputs
        }
      }
    }
  },
  watch: {
    activeSnippet(snip) {
      this.snippetKey = snip.key
      this.id = snip.id
      typeof snip.value === 'string'
        ? this.snippetValue = snip.value
        : this.snippetValue = snip.value.HTML
     
    },
    snippetValue(val) {
   
      this.highlited = val
                        .replace(/\n/g, '\n\n')
                        .replace(/%\w*%/g, '<mark>$&</mark>');
    }
  },
  mounted() {
    console.log('mounted')
    this.snippetKey = this.activeSnippet.key
    this.snippetValue = this.activeSnippet.value
    this.id = this.activeSnippet.id
  },
  methods: {
    onSnippetChange() {
      // console.log(this.currentStateOfEditedSnippet)
       this.$store.commit('editSnippet',this.currentStateOfEditedSnippet)
       this.$store.dispatch('updateSnippetInDb',this.currentStateOfEditedSnippet)
    },
    onSnippetSave() {
      // console.log(this.getVariables)
      // console.log(this.isComplexSnippet)
      // console.log(this.currentStateOfEditedSnippet)
      this.snippetSaved = true
      this.$store.dispatch('saveSnippetToDb',this.currentStateOfEditedSnippet)
    },
    onSnippetUpdate() {
      console.log('update')
      this.$store.dispatch('updateSnippetInDb',this.currentStateOfEditedSnippet)
     
    },
    onSnippetDelete() {
      // this.$store.dispatch('deleteSnippetFromDB',this.currentStateOfEditedSnippet)
      console.log('delete')
      this.isModalOpen = true
    },
    onModalClicked(data) {
      this.isModalOpen = false
    }
  }
}
</script>

<style scoped>
.info-helper {
  font-size: 17px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -26px;
  width: 80%;
  margin: auto;
  background: rgba(0,0,0,0.6);
  padding: 3px;
  color: #eee0cb;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.textinput {
  position: relative;
}
.highlight {
      position: absolute;
    top: 1px;
    left: 66px;
    z-index: 1;
    border: 2px solid #685972;
    background-color: #fff;
    overflow: auto;
    pointer-events: none;
    transition: transform 1s;
    height: 222px;
    width: 555px;
    text-align: left;
}
section {
    background: #EEE0CB;
    padding: 2px;
    border: 2px #BAA898 solid;
    transition: opacity 200ms ease-out;
    opacity: 1;
    color: #848586;
    float: left;
    height: 493px;
    width: 60%;
    display: block;
     color: #3C1053;
}

section .key {
    margin: 30px;
}
section .key span {
    margin-right: 20px;
}

section .key input {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    border: 2px solid #685972;
}

section textarea {
    display: block;
    margin: 50px auto;
    width: 80%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
}

.action-btn {
    float: right;
    margin-right: 30px;
    color: #3C1053;
    padding: 4px 20px;
    transition: all 400ms ease;
}

.action-btn:hover {
    cursor: pointer;
    background: #3C1053;
    color:  #EEE0CB;
     transition: all 400ms ease;
}
mark {
  border-radius: 3px;
  color: transparent;
  background-color: #b1d5e5;
}

.highlight {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
}

.logo-magic-enter-active {
  transition: 
    opacity .3s,
    transform 1s;
    transition-delay: 200ms;
}

.logo-magic-leave-active {
    transition: 
    opacity .3s,
    transform 1s;
    transition-delay: 200ms;
}

.logo-magic-enter, .logo-magic-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



</style>

