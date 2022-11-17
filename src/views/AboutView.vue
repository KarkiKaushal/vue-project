<template>
  <div id="about">
    <div>
      User Details <br/>
      Id = {{this.$store.state.user.id}} <br/>
      Email = {{this.$store.state.user.email}}<br/>
      Signed In = {{this.$store.state.signed_in}}
    </div>
    <div>
    <button @click="logout()">Logout</button><br/>
    <input type="text" v-model=email /><br/>
    <button @click="userDetails()">Find User</button>
    <h1>{{value}}</h1>
    <h2>{{this.$store.state.count}}</h2>
    <button @click="increment()">Add</button><br/>
    <button @click="set()">Set</button><br/>

    </div>
    

  </div>
</template>

<style>
#about{
  width: 100%;
  display: grid;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import router from '../router';
export default {
  data(){
    return{
      value:this.$store.state.user.id,
      email:"",
      goal : this.$store.state.count
    }
  },
  methods: {
    async logout(){
      const requestOptions ={
                method: "DELETE",
                origin: "https://localhost:5173/",
                headers: {"Content-Type":"application/json",
                        "Access-Control-Allow-Origin": "*" 
                      },
                //  mode :"no-cors" 
                  };

        const resp = await fetch(`http://localhost:3000/sessions/${this.value}`,requestOptions)
        const data = await resp.json()
        console.log(data)
        if (data.msg ="Logged Out")
           alert("Logout Successful")
           router.replace({path: '/'})

    },  
    async userDetails(){
        const requestOptions ={
                method: "POST",
                headers: {"Content-Type":"application/json",
                        "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({email:this.email})
           }; 
        const resp = await fetch("http://localhost:3000/details",requestOptions);
        const data = await resp.json()
        console.log(data) 
        this.value = data.msg.id
    },
    increment(){
      console.log("hhhh");
      this.$store.commit('increment')
    },
  },
  computed:{
    

    
  }
}
</script>
