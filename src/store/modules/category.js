// 分类模块
// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合，依赖topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map((item) => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    show (state, id) {
      // find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    // 修改当前一级分类下的open数据为false
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },

  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      console.log(result)
      result.forEach(item => {
        item.open = false
      })
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
