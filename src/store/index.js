import { createStore } from "vuex";

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
export default store;