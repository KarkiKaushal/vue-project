<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import AboutViewVue from "./views/AboutView.vue";
import HomeViewVue from "./views/HomeView.vue";

</script>

<template>
  <div>
  <div id ="navbar">
    <nav >
      <ul id = "navbar-div">
        <RouterLink to="/"><li>Home</li></RouterLink> 
        <RouterLink to="/about"><li>About</li></RouterLink>
        <RouterLink to="/signup"><li>Signup</li></RouterLink>
        <RouterLink to="/signin"><li>Sign in</li></RouterLink>

      </ul>
    </nav>
  </div>
    <RouterView/>
</div>
</template>

<style>
#navbar{
display: flex;
/* border: 1px solid red; */
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
