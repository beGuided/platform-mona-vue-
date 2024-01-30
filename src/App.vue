<template>
  <nav>
    <router-link :to="{name:'Home'}" v-if="isLoggedIn"> Home </router-link> |
    <router-link :to="{name:'Login'}" v-if="isLoggedIn"> Login </router-link> |
    <router-link :to="{name:'Register'}" v-if="!isLoggedIn"> Register </router-link> |
    <router-link :to="{name:'Dashboard'}" v-if="!isLoggedIn"> Dashboard </router-link> |
    <a href="#" @click="logout" v-if="!isLoggedin">Logout</a>
  </nav>
  <!-- <SideBar/> -->

  <div id="app">
  <router-view/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

import '@/assets/vendors/mdi/css/materialdesignicons.min.css';
import '@/assets/vendors/css/vendor.bundle.base.css';

//import fav from '@/assets/images/favicon.ico'

import '@/assets/vendors/js/vendor.bundle.base.js';
import '@/assets/vendors/chart.js/Chart.min.js';
 import '@/assets/js/jquery.cookie.js';
// import '@/assets/js/off-canvas.js';
// import "@/assets/js/hoverable-collapse.js"
// import "@/assets/js/misc.js"
   
// import "@/assets/js/dashboard.js"
// import '@/assets/js/todolist.js'


import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components:{
    NavBar,
    SideBar
  },
  name:'App',

  computed :{
    ...mapState(['isLoggedIn'])
  },
  
    ...mapActions(['logout'])
  

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

</style>
