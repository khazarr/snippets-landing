<template>
  <section @click="onSnippetClick">
      <div>
        <p> <span>{{id + 1}}</span> {{snippetKey}}</p>
      </div>
  </section>
</template>

<script>
export default {
  props: ["snippetKey", "snippetValue", "id", 'snippetId'],
  methods: {
    onSnippetClick() {
      console.log(this.snippetId);
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
}

section:hover {
  cursor: pointer;
  opacity: 0.96;
  transition: opacity 200ms ease-out;
}

section div {
  display: inline;
}

section span {
  background: #3c1053;
  color: #eee0cb;
  padding: 10px 20px;
  border-radius: 100%;
}
</style>
