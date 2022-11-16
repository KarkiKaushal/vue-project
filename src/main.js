import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
const store = createStore({
    state () {
      return {
        user:{
            id: null,
            email: "",
        },
        signed_in: false
      }
    },
    mutations: {
      increment (state) {
        state.count=state.count+5
      }
    }
  })


store.subscribe( (mutation, state) => {
    localStorage.setItem('user', JSON.stringify(state.user));  
    localStorage.setItem('signed_in', JSON.stringify(state.signed_in));
    console.log("Storage ");  
})  
const app = createApp(App);

app.use(router);
app.use(store)

app.mount("#app");
