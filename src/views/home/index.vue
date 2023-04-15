<template>

  <div class="home-entry">
    <div class='container'>
       <!-- 左侧分类 -->
   <HomeCategory />
   <!-- 轮播图 -->
   <HomeBanner />
    </div>
</div>
</template>

<script>

import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner
  }

}

</script>

<style scoped lang='less'>
.container {
  .hoverShadow();
  color: @xtxColor;
}

</style>
