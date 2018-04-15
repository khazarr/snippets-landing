import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  selectedSnippet: {
    key: '/zz',
    value: 'testowe z tablicy 2',
    id: '12312'
  },
  snippetsArray: [
    {
      key: '/zz',
      value: 'testowe z tablicy 2',
      id: '12312'
    },
    {
      id: '123',
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
          }
        ]
      }
    },
    {
      id: '33',
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
      id: '122233',
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
  selectSnippet (state, snippetId) {
    state.selectedSnippet = state.snippetsArray.find(snippet => snippet.id === snippetId)
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
  },
  activeSnippet (state) {
    return state.selectedSnippet
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
