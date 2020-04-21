import Vue from 'vue'
import App from './App.vue'
import StatusContainer from './StatusContainer.vue'

Vue.component('my-status-container', StatusContainer);

new Vue({
  el: '#app',
  render: h => h(App)
});
