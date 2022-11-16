<script setup>
import HelloWorld from "../components/HelloWorld.vue";
</script>
<template>
  <main>
    <div class="home">
    <h1>Welcome</h1>
    <h2>{{this.$store.state.count}}</h2>
    <RouterLink to="/signup"><button>Sign Up </button></RouterLink>
    <RouterLink to="/signin"><button>Sign In </button></RouterLink>
    </div>
<!-- <RouterView/> -->
</main>
</template>
<style scoped>
h1{
  color: violet;
  left: 50%;
}
.home{
  display: grid;
  width: 100%;
  margin-left: 20;
  color: red;
  /* border: 1px double black; */
  margin-left: 0%;
  justify-content: center;
  /* float: right; */
  /* display: flex; */
  /* margin-left: 40%; */
}
button{
  width: 100%;
  margin: 10 0 10 0;
  border: 1% solid black ;}
</style>