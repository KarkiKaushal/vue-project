<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  mounted(){
      if (localStorage.userId) {
        this.$store.state.user.id = localStorage.userId;
        console.log("Local");
      }
      if (localStorage.userEmail) {
        this.$store.state.user.email = localStorage.userEmail;
        console.log("LocalM");
      }
      if (localStorage.signed_in) {
        this.$store.state.signed_in = localStorage.signed_in;
      }
    },
}
</script>

<template>
  <div>
  <div id ="navbar">
    <nav >
      <ul id = "navbar-div">
        <RouterLink to="/"><li>Home</li></RouterLink> 
        <RouterLink to="/about"><li>About</li></RouterLink>
        <RouterLink to="/signin" v-if = "this.$store.state.signed_in ==true" ><li>Sign Out</li></RouterLink>
        <RouterLink to="/signin" v-if = "this.$store.state.signed_in ==false"><li>Sign in</li></RouterLink>
        <RouterLink to="/signup" v-if = "this.$store.state.signed_in ==false"><li>Signup</li></RouterLink>

      </ul>
    </nav>
  </div>
    <RouterView/>
</div>
</template>

<style>
#navbar{
display: flex;
background-color: bisque;
width: 100%;
height: 100%;
justify-content: center;
}
#navbar-div{
  /* border: 1px solid red; */
  float: right;
  width: 100%;
  padding-right: 10%;
  list-style: none;
  display: flex;
  /* background-color: gold; */
  justify-content: space-around;
  color: Black;
  text-decoration: none;
}
</style>
