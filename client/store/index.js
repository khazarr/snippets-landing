import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

const state = {
  count: 0,
  loading: false,
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
  },
  addNewSnippet (state) {
    const snippet = {
      key: '',
      value: '',
      id: +new Date()
    }
    state.snippetsArray.push(snippet)
    state.selectedSnippet = state.snippetsArray.find(snip => snip.id === snippet.id)
  },
  editSnippet (state, newSnippet) {
    state.snippetsArray.map(snip => {
      if (snip.id === newSnippet.id) {
        snip.key = newSnippet.key
        snip.value = newSnippet.value
      }
    })
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

const actions = {
  getSnippetsFromDb ({ commit }) {
    commit('setLoading', true)
    const snippets = []
    firebase.database().ref('snippets').once('value')
      .then(data => {
        console.log('obtained data')
        console.log(data.val())
        const obj = data.val()
        for (let key in obj) {
          const snippet = {
            id: key,
            key: obj[key].key,
            value: obj[key].value
          }
          snippets.push(snippet)
        }
        console.log(snippets)
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
  },
  initializeFirebase ({ dispatch }) {
    const config = {
      apiKey: "AIzaSyCHjEQ3-l-v9zu9Tgwr0hDNMpw2kIom51U",
      authDomain: "wklejarka-1d39e.firebaseapp.com",
      databaseURL: "https://wklejarka-1d39e.firebaseio.com",
      projectId: "wklejarka-1d39e",
      storageBucket: "wklejarka-1d39e.appspot.com",
      messagingSenderId: "480680450073"
    }
    firebase.initializeApp(config)
    console.log('initialized')
    dispatch('getSnippetsFromDb')
  },
  saveSnippetToDb ({commit}, snippet) {
    firebase.database().ref('snippets').push(snippet)
      .then(data => {
        console.log('dodano')
        console.log(data)
      })
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
