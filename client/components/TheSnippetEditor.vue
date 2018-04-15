<template>
  <section>
      <div class="key">
          <span>Hotkey</span>
          <input v-model="snippetKey" type="text">
      </div>
      <div class="textinput">
          <textarea v-model="snippetValue" name="snippetInput" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="save-btn">Save</div>
  </section>
</template>


<script>
export default {
  data() {
      return {
        snippetKey: "",
        snippetValue: "halko"
      }
  }
}
</script>

<style scoped>
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
</style>

