<template>
  <div class="container-fluid">
    <NavBar/>
    <router-view class="mt-5"/>
  </div>
</template>

<script>

import NavBar from "@/components/Navbar";
export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
@import './assets/style.css';
</style>
