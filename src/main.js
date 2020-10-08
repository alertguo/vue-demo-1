const Vue = window.Vue
// 默认生成的
// import Vue from 'vue'
// import App from './App.vue'
//
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 完整版
// new Vue({
//   el:'#app',
//   template:`<div>
//     {{n}}
//     <button @click="add">+1</button>
//     </div>`,
//   data:{
//     n:0
//   },
//   methods:{
//     add(){
//       this.n += 1
//     }
//   }
// })

// 运行时
// new Vue({
//   el: '#app',
//   render(h) {
//     return h('div', [this.n, h('button', {on: {click: this.add}}, '+1')])
//   },
//   data: {
//     n: 0
//   },
//   methods: {
//     add() {
//       this.n += 1
//     }
//   }
// })

// 单文件组件
// import Demo from './Demo.vue'
//
// new Vue({
//   el: '#app',
//   render(h) {
//     return h(Demo)
//   }
// })
import Demo from './Demo.vue'
new Vue({
  components:{Demo},
  data(){
    return{
      visible: true
    }
  },
  template:`
    <div>
      <button @click="toggle">toggle</button>
      <hr>
      <Demo v-if="visible === true"/>
    </div>
  `,
  methods:{
    toggle(){
      this.visible = !this.visible
    }
  }
}).$mount('#app')
