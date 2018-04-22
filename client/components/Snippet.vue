<template>
  <section @click="onSnippetClick" v-bind:class="{ active: isActive }">
      <div>
        <p> <span>{{id + 1}}</span> {{snippetKey}} </p>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ["snippetKey", "snippetValue", "id", 'snippetId'],
  computed: {
    ...mapGetters([
      'activeSnippet'
    ]),
    isActive() {
      return this.snippetId == this.activeSnippet.id
    }
  },
  methods: {
    onSnippetClick() {
      this.$store.commit('selectSnippet',this.snippetId)
    }
  }
};
</script>

<style scoped>
section {
  background: #eee0cb;
  padding: 2px;
  margin: 1px;
  border: 2px #baa898 solid;
  transition: opacity 200ms ease-out;
  opacity: 0.7;
  color: #3c1053;
  position: relative;
}

section:hover {
  cursor: pointer;
  opacity: 0.96;
  transition: opacity 200ms ease-out;
}

.active {
  opacity: 1;
}

section div {
  display: inline;
}

section span {
  background: #3c1053;
  color: #eee0cb;
  padding: 3px 12px;
  border-radius: 100%;
}

section p {
}
</style>
