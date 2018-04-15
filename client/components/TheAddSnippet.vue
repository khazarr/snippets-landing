<template>
  <div v-on:click="onClick">
      <p>Add New Snippet</p>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$store.commit('addNewSnippet')
    }
  }
};
</script>


<style scoped>
div {
  background: #eee0cb;
  padding: 2px;
  margin: 1px;
  border: 2px #baa898 solid;
  transition: opacity 200ms ease-out;
  opacity: 0.7;
  color: #3c1053;
}

div:hover {
  cursor: pointer;
  opacity: 0.96;
  transition: opacity 200ms ease-out;
}
</style>

