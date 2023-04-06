
import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName(state){
//       return state.username + '!!'
//     }
//   },
//   mutations: {
//     updateName(state){
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName(ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000);
//     }
//   },
//   modules: {
//   }
// })

const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + '11'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAAAA'
    }
  }
}

// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '11'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleBBBB'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
