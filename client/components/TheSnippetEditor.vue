<template>
  <section>
      <div class="key">
          <span>Hotkey</span>
          <input v-model="snippetKey" type="text">
      </div>
      <div class="textinput">
          <textarea v-if="typeof activeSnippet.value === 'string'" v-model="snippetValue" name="snippetInput" id="" cols="30" rows="10"></textarea>
          <textarea v-else v-model="activeSnippet.value.HTML" name="snippetInput" id="" cols="30" rows="10">
            
          </textarea>
            <div class="highlight" v-html="highlited"></div>
        
      </div>

      <div class="save-btn">Save</div>
  </section>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      snippetKey: "",
      snippetValue: "",
      highlited: ""
    }
  },
  computed: {
    ...mapGetters([
      'activeSnippet'
    ])
  },
  watch: {
    activeSnippet(snip) {
      this.snippetKey = snip.key
      typeof snip.value === 'string'
        ? this.snippetValue = snip.value
        : this.snippetValue = snip.value.HTML
     
    },
    snippetValue(val) {
   
      this.highlited = val
                        .replace(/\n$/g, '\n\n')
                        .replace(/%\w*%/g, '<mark>$&</mark>');
    }
  },
  mounted() {
    console.log('mounted')
    console.log('mounted')
    this.snippetKey = this.activeSnippet.key
    this.snippetValue = this.activeSnippet.value
  }
}
</script>

<style scoped>
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
    width: 550px;
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
}

section textarea {
    display: block;
    margin: 50px auto;
    width: 80%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
}

.save-btn {
    float: right;
    margin-right: 30px;
    color: #3C1053;
    padding: 4px 20px;
    transition: all 400ms ease;
}

.save-btn:hover {
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
</style>

