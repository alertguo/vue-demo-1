<template>
  <div class="red">
    {{message}}
    <button @click="fn">+1</button>
  </div>
</template>

<script>
  export default {
    props: ['message','fn']
  }
</script>

<style scoped>
  .red{
    color: red;
  }
</style>