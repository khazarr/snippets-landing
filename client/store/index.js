import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  snippetsArray: [
    {
      key: '/zz',
      value: 'testowe z tablicy 2'
    },
    {
      key: '/qe',
      value: {
        HTML: 'Hehe %imie% dzieki, zobacze w domu ten %item% xD',
        inputs: [
          {
            type: 'text',
            variable: 'imie',
            value: ''
          },
          {
            type: 'text',
            variable: 'item',
            value: ''
          },
        ]
      }
    },
    {
      key: '/ins',
      value: {
        HTML: 'Hello %name%! I will see %item% later',
        inputs: [
          {
            type: 'text',
            variable: 'name',
            value: ''
          },
          {
            type: 'text',
            variable: 'item',
            value: ''
          }
        ]
      }
    },
    {
      key: '/reco',
      value: {
        HTML: '%main%%ver% \n %product%%ver% \n %category%%ver% \n %basket%%ver%',
        inputs: [
          {
            type: 'text',
            variable: 'main',
            value: ''
          },
          {
            type: 'text',
            variable: 'product',
            value: ''
          },
          {
            type: 'text',
            variable: 'category',
            value: ''
          },
          {
            type: 'text',
            variable: 'basket',
            value: ''
          },
          {
            type: 'text',
            variable: 'ver',
            value: ''
          }
        ]
      }
    }
  ]
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const getters = {
  snippets (state) {
    return state.snippetsArray
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
