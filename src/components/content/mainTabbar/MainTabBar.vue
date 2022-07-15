<template>
  <!-- 使用组件 -->
    <tab-bar>
      <!-- 如果具体要加某一个变量link="/home"改写成:link="/home" -->
      <tab-bar-item link="/home">
        <!-- 使用插槽 -->
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
//引入组件
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name:'MainTabBar',
    //注册组件
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>