<template>
  <nav class="navbar navbar-light bg-light">
        <ul class="navbar-nav d-flex justify-content-between flex-row w-100">
          <li class="nav-item">
              <router-link class="navbar-brand" to="/">
                Menu
              </router-link>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <router-link class="navbar-brand" to="/login">
              Login
            </router-link>
          </li>
          <li class="nav-item cursor-pointer" v-if="hasToken">
            <a
                class="nav-link"
                @click="deleteAction">
               LogOut
            </a>
          </li>
        </ul>
  </nav>
</template>
<script>
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters('authMod', ['token']),
    hasToken() {
      return this.token || localStorage.getItem('token')
    }
  },
  methods:{
    async deleteAction(){
      try{
        this.$store.dispatch('authMod/logout', this.token);
        await router.push("/login")
      }
      catch(error){
        console.log(error)
      }
    },
  }
}
</script>