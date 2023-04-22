<template>
 <AppNavbar/>
 <AppHeader/>
 <AppHeaderSticky/>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter/>

</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-stick.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>

</style>
