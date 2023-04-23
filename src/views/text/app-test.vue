<template>
  <div class="xtx-pagination">
    <a href="javascript:;" class="disabled" v-if="myCurrentPage <= 1">上一页</a>
    <a v-else href="javascript:;">上一页</a>
    <span v-if="pager.start>1">...</span>
    <a href="javascript:;" :class="{active:i===myCurrentPage}" v-for="i in pager.btnArr" :key="i">{{i}}</a>
    <span v-if="pager.end<pager.pageCount">...</span>
    <a v-if="myCurrentPage>=pager.pageCount" href="javascript:;" class="disabled">下一页</a>
    <a v-else href="javascript:;">下一页</a>
  </div>
  <div>
    <Message text="手机号或密码错误" type="warn"  style="margin-top: 130px;"/>
  </div>
</template>
<script>

import { computed, ref } from 'vue'
import Message from '../../components/library/xtx-message.vue'
export default {
  name: 'XtxPagination',
  components: { Message },
  props: {
    total: {
      type: Number,
      default: 100
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  setup () {
    // 总条数
    const myTotal = ref(100)
    // 每页条数
    const myPageSize = ref(10)
    // 当前第几页
    const myCurrentPage = ref(1)
    // 按钮个数
    const btnCount = 5
    // 重点：根据上述数据得到（总页数，起始页码，结束页码，按钮数组）
    const pager = computed(() => {
      // 计算总页数
      const pageCount = Math.ceil(myTotal.value / myPageSize.value)
      // 计算起始页码和结束页码
      // 1. 理想情况根据当前页码，和按钮个数可得到
      let start = myCurrentPage.value - Math.floor(btnCount / 2)
      let end = start + btnCount - 1
      // 2.1 如果起始页码小于1了，需要重新计算
      if (start < 1) {
        start = 1
        end = (start + btnCount - 1) > pageCount ? pageCount : (start + btnCount - 1)
      }
      // 2.2 如果结束页码大于总页数，需要重新计算
      if (end > pageCount) {
        end = pageCount
        start = (end - btnCount + 1) < 1 ? 1 : (end - btnCount + 1)
      }
      // 处理完毕start和end得到按钮数组
      const btnArr = []
      for (let i = start; i <= end; i++) {
        btnArr.push(i)
      }
      return { pageCount, start, end, btnArr }
    })

    // 改变页码
    const changePage = (newPage) => {
      myCurrentPage.value = newPage
    }
    return { pager, myCurrentPage, changePage }
  }
}
</script>
<style scoped lang="less">
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: @xtxColor;
    }
    &.active {
      background: @xtxColor;
      color: #fff;
      border-color: @xtxColor;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>
