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
        :snippetId="snippet.id"
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
      'activeSnippet'
    ])
  },
  created() {
    this.$store.dispatch('initializeFirebase')
  }
}

/*
do fire base 
  var config = {
    apiKey: "AIzaSyCHjEQ3-l-v9zu9Tgwr0hDNMpw2kIom51U",
    authDomain: "wklejarka-1d39e.firebaseapp.com",
    databaseURL: "https://wklejarka-1d39e.firebaseio.com",
    projectId: "wklejarka-1d39e",
    storageBucket: "wklejarka-1d39e.appspot.com",
    messagingSenderId: "480680450073"
  };
  firebase.initializeApp(config);
*/
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
  margin:  100px auto;
}
.snippets {
  max-height: 500px;
  min-height: 500px;
  overflow: auto;
  float: left;
  width: 35%;

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

