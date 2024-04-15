import Vue from 'vue'
import App from './App.vue'
import VueDraggable from 'vue-draggable'
import { VueDraggableDirective } from 'vue-draggable'

Vue.use(VueDraggable)
Vue.config.productionTip = false

export default {
  directives: {
    dragAndDrop: VueDraggableDirective
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')