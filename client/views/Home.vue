<template>
 
<transition name="logo-magic" appear>
  <div class="page">
    <h1>Text Inserter Snippets</h1>
    <div class="snippets">
      <TheAddSnippet />
      <snippet 
        v-for="(snippet, index) in snippets"
        :key="index"
        :snippetKey="snippet.key"
        :snippetValue="snippet.value"
        :id="index"
      />
    </div>
    <TheSnippetEditor />

  </div>
</transition>
</template>

<script>
import Snippet from 'components/Snippet'
import TheSnippetEditor from 'components/TheSnippetEditor'
import TheAddSnippet from 'components/TheAddSnippet'
import { mapGetters } from 'vuex'

export default {
  components: {
    Snippet,
    TheSnippetEditor,
    TheAddSnippet
  },
  computed: {
    ...mapGetters([
      'snippets',
    ])
  }
}
</script>

<style>
body {
  background: linear-gradient(to right, #ad5389, #3c1053);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
  color: #EEE0CB;
  font-size: 50px;
}

.page {
  width: 60%;
  display: block;
  margin: 0 auto;
}
.snippets {
  max-height: 500px;
  min-height: 500px;
  overflow: auto;
  float: left;
  width: 400px;

}
.logo-magic-enter-active {
  transition: 
    opacity 2s,
    transform 2s;
}

.logo-magic-enter {
  opacity: 0;
}

h1.logo-magic-enter {
  transform: translateY(40%);
}

h1.logo-magic-enter-active {
  transition-delay: 800ms;
}
</style>

