<template>
  <div class="red">
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
    }
  },
  created(){
    console.log('实例创建了')
  },
  mounted(){
    console.log('实例出现在页面了')
  },
  updated(){
    console.log('实例更新了')
  },
  destroyed(){
    console.log('实例消亡了')
  },
  methods: {
    add() {
      this.n += 1
    },
  }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>