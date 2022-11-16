<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>HomePage</h1>
  <RouterLink to="/Signup"><button>Sign Up</button></RouterLink>
  <RouterLink to="/Signin"><button>Sign In</button></RouterLink>
  
</template>

<style >
</style>
