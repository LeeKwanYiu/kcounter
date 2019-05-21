import Kcounter from './kcounter.vue';
const kcounter = {
    install: function (Vue) {
      if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue
      }
      Vue.component('kcounter', Kcounter)
    }
}

export default kcounter;