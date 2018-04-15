<template>
  <section>
      <div>
         
      <p> <span>{{id + 1}}</span> {{snippetKey}}</p>
      </div>
  </section>
</template>

<script>
export default {
  props: ['snippetKey','snippetValue','id']
}
</script>

<style scoped>
section {
    background: #EEE0CB;
    padding: 2px;
    margin: 1px;
    border: 2px #BAA898 solid;
    transition: opacity 200ms ease-out;
    opacity: 0.7;
    color: #848586;
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
    background: #3C1053;
    color: #EEE0CB;
    padding: 10px 20px;
    border-radius: 100%;
}
</style>
