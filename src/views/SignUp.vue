<template>
    <div id="s1-div">
        <h1>Register Here</h1>
        <input type="text" placeholder="Enter Your Email" v-model="email" /><br/>
        <input type="password" placeholder="Password"  v-model="password"/><br/>
        <input type="password" placeholder="Password Confirmation" v-model="confirm"/><br/>
        <button @click="register()">Submit</button>
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
        confirm : ""
    }
  },  
  methods: {
    async register(){
        if(this.password==this.confirm)
           { const requestOptions ={
                method: "POST",
                headers: {"Content-Type":"application/json",
                        "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({email:this.email,password:this.password})
           }; 
        const resp = await fetch("http://localhost:3000/users", requestOptions)
        const data = await resp.json()
        console.log(data)
        if (resp.status==200)
        {
            alert("User Successfully Created");
            router.replace({path: '/signin'})
        }
    }
else
alert("Password and Confirm Password not matched")    
}
    // getData: function(){
    //     alert("Hello"+" "+ this.email )
    // }
  }
}
</script>
