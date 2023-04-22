<template>
   <div class="goods-tabs">
    <nav>
      <a :class="{ active: activeName === 'detail' }"   @click="clickTab('detail')" href="javascript:;">商品详情</a>
      <a :class="{ active: activeName === 'comment' }"  @click="clickTab('comment')" href="javascript:;">商品评价<span>{{goods.commentCount}}</span></a>
    </nav>
    <!-- 切换内容的地方 其实两个组件-->
    <!-- 在vue中动态的去切换组件其实可以使用动态组件component组件 -->
    <!-- is属性用来决定component动态组件渲染为那个组件，组件的名称 -->
    <!-- <GoodsDetial v-if="activeName === 'GoodsDetial'" />
    <GoodsComment v-if="activeName === 'GoodsComment'" /> -->
      <component :is="'goods-'+activeName" />
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import GoodsDetail from './goods-detail'
import GoodsComment from './goods-comment'
export default {
  name: 'GoodsTabs',
  components: { GoodsDetail, GoodsComment },
  setup () {
    // detail-->详情   comment-->评价
    const activeName = ref('detail')
    const goods = inject('goods')
    const clickTab = (name) => {
      activeName.value = name
    }
    return { activeName, clickTab, goods }
  }
}
</script>

<style lang="less" scoped>
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}
</style>
