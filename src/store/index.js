import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    tickers: [],
   
  },
  getters: {
    allTickers: (state)=>state.tickers
  },
  mutations: {
    setTickers: (state, tickers) => (state.tickers = tickers)
  },
  actions: {
    async fetchTickers({commit}){
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
      commit('setTickers', response.data)
      console.log(response.status_code)
    }
  },
  modules: {
  }
})