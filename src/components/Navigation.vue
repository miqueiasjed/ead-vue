<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">EAD</router-link>
        </div>
        <ul class="nav navbar-nav">
          <router-link
            v-if="!isLoggedIn"
            class="nav-item nav-link"
            :to="{ name: 'Login' }"
          >
            Login
          </router-link>
          <router-link
            v-if="!isLoggedIn"
            class="nav-item nav-link"
            :to="{ name: 'Register' }"
          >
            Register
          </router-link>
          <router-link
            v-if="isLoggedIn"
            class="nav-item nav-link"
            :to="{ name: 'Dashboard' }"
          >
            Dashboard
          </router-link>
          <a
            class="nav-item nav-link"
            v-if="isLoggedIn"
            @click.prevent="logout"
            href="#"
            >Logout</a
          >
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import User from "../services/users.service";
  import { onMounted, ref } from 'vue'
  import router from '@/router'
  
  export default {
    setup() {
      const isLoggedIn = ref(false)

      onMounted(async () => {
        isLoggedIn.value = !!localStorage.getItem("auth");
      })
          
      const login = () => isLoggedIn.value = true;

      const logout = () => {
        User.logout().then(() => {
          localStorage.removeItem("auth");
          isLoggedIn.value = false;
          router.push({name: 'Home'})
        });
      }

      return {
        logout,
        isLoggedIn
      }

    }
  }
  </script>
  
  
  <style>
  .router-link-exact-active {
    color: #ffffff !important;
    transition: all 0.25s;
  }
  </style>