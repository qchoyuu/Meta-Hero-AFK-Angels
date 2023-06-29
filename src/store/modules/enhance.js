import Vue from 'vue'
const enhance = {
  state: {
    enhanceJs:{

    }
  },
  mutations: {

  },
  actions: {
    addEhanceRecord({ commit }, record) {
      commit('ADD_TABLE_ENHANCE', record)
    }
  }
}
export default enhance