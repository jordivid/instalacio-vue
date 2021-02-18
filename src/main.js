import Vue from 'vue';
/* Estos plugins estan instalados.
   Comento los imports ya que el "npm run serve" da error
   si importo módulos que no utilizo.
*/
// import VueRouter from 'vue-router';
// import Vuex from 'vuex';
// import axios from 'axios';
// import VueValidate from 'vuelidate'; 
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
