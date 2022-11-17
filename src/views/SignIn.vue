<template>
    <div id="s1-div">
        <h1>Login Here</h1>
        <input type="text" placeholder="Enter Your Email" v-model=email /><br/>
        <input type="password" placeholder="Password" v-model=password /><br/>
        <button @click="login()">Submit</button>
    </div>
</template>
<style>
#s1-div{
 display: grid;   
left: 50%;    
justify-content: center;
}
</style>
<script>
import router from '../router'; 
export default {
  data(){
    return {
        email : "",
        password : "",
    }
  },
  methods: {
    async login(){
        const requestOptions ={
                method: "POST",
                headers: {"Content-Type":"application/json",
                        "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({email:this.email,password_digest:this.password})
           }; 
        const resp = await fetch("http://localhost:3000/sessions",requestOptions);
        const data = await resp.json()
        console.log(data);
        this.$store.state.user.id =data.data.id
        this.$store.state.user.email = data.data.email
        this.$store.state.signed_in =true
        if (data.msg ="Logged in Successfully")
           alert("Login Successful")
           router.replace({path: '/about'})

    }
  }
}
</script>