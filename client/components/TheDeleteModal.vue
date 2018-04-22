<template>
    <div>
        <div v-bind:class="{ active: isModalOpen }" class="mask" role="dialog"></div>
        <div v-bind:class="{ active: isModalOpen }" class="modal" role="alert">
          <button v-on:click="emit('close')" class="close" role="button">X</button>
          <div class="header">Are you sure?</div>

          <div v-on:click="emit('close')" class="action-btn">No</div>
          <div v-on:click="emit('delete')" class="action-btn">Yes</div>
        </div>
    </div>
</template>


<script>
export default {
  props: ['isModalOpen', 'id'],
  methods: {
    emit(data) {
     if(data == 'delete') {
       this.$store.dispatch('deleteSnippetFromDB',this.id)
     }
     this.$emit('modalClicked')
     
    }
  }
}
</script>


<style scoped>
.header {
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 38px;
}
.close{
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 30px;
  background: #000;
  color: #fff;
  cursor: pointer;
  border: 0;
}

.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 73, 94, 0.8);
  z-index: 50;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.7s;
}



.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 220px;
  margin-left: -200px;
  margin-top: -150px;
  background: #bdc3c7;
  z-index: 100;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.5s ease-out;
  
  transform: translateY(45px);
}


.active{
  visibility: visible;
  opacity: 1;
}

.active + .modal{
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.action-btn {
  display: inline;
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
</style>
