import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

console.log(Vuex);

export default new Vuex.Store({
  state: {
    city:"苏州"
  },
  mutations: {
    changeCityName(state, item) {
      state.city = item
    }
    // cityFun(state,item) {
    //   state.city = item
    // }
  },
  actions: {
    // changeCityName(ctx, item) {
    //   ctx.city = item

    //   // ctx.commit("cityFun",item)
    // }
  },
  modules: {

  }
})
