<template>
  <div id="about">
    <div id="left-about">
      <img id ="pp" src="https://plus.unsplash.com/premium_photo-1663050629719-83e16832a804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="pic"/>
    </div>
    <div id="right-about">
      <h1>User Details</h1> <br/>
      Id = {{this.$store.state.user.id}} <br/>
      Email = {{this.$store.state.user.email}}<br/>
      Signed In = {{this.$store.state.signed_in}}
    </div>
    <div>
   

    </div>
    

  </div>
</template>

<style>
#about{
  width: 100%;
  height: 90vh;
  min-height: 30rem;
  /* display: g; */
  background-color:aquamarine;
}
#pp{
  height: 25rem;
  width: 40%;
  padding: 5% 0 0 5% ;
}
#left-about{
width: 49%;
float: left;
border: 1px solid black;
}
#right-about{
  width: 49%;
  float: right;
  /* padding: 5% 0 0 1%; */
  border: 1px solid black;
  text-align: center;
  /* height: 100vh; */

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
}
</script>
