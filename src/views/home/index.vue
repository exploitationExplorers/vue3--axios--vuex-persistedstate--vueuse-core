<template>

  <div class="home-entry">
    <div class='container'>
       <!-- 左侧分类 -->
   <HomeCategory />
   <!-- 轮播图 -->
   <HomeBanner />

    </div>
</div>
 <!-- 新鲜好物 -->
 <HomeNew />

 <HomeHot/>
     <!-- 热门品牌 -->
 <HomeBrand/>

 <HomeProduct/>
  <!-- 最新专题 -->
<HomeSpecial/>

</template>

<script>

import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }

}

</script>

<style scoped lang='less'>
.container {
  .hoverShadow();
  color: @xtxColor;
}

</style>
