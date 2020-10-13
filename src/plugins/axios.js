import Vue from "vue";
import axios from "axios";

//axios.defaults.baseURL = "http://apiprojetos-com.umbler.net/";

axios.defaults.baseURL = "http://localhost:3000/"

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
