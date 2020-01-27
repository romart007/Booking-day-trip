import Vue from 'vue'
import App from './App.vue'
import Datepicker from 'vuejs-datepicker';
import Multiselect from 'vue-multiselect';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';

Vue.use(Datepicker);
Vue.use(Multiselect); 
Vue.use(require('vue-moment'));


new Vue({
  el: '#app',
  render: h => h(App)
})
