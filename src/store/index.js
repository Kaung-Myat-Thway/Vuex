import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter : 0,
    colorCode : "blue"
  },
  getters: {
    counterSquare (state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCount (state,increaseNumber) {
      state.counter += increaseNumber
    },
     decreaseCount (state,decreaseNumber) {
      state.counter-= decreaseNumber
    }
  },
  actions: {
    increaseCount ({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response=>{
            commit('increaseCount',response.data)
      })
    },
    decreaseCount ({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response=>{
            commit('decreaseCount',response.data)
      })
    },
  },
  modules: {
  }
})
