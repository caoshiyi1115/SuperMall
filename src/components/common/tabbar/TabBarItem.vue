<template>
  <!-- 所有的item都展示同一个图片，同一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    //props是子组件访问父组件数据的唯一接口
    //定义被调用组件,用来传输需要的数据
    props: {
      //路径：类型
      link: String,
      activeColor: {
        typeof: String,
        //default：默认
        default: 'red'
      }
    },
    data() {
      return {
        // 指对象是否激活、启用、可用、正常状态
        // 加!进行取反
        // isActive: true,
        // path:'/home'
      }
    },
    computed: {
      isActive () {
        //这里的$route是指哪个路由活跃就是指哪个对象的
        //当点击这个活跃对象时，其他显示不活跃
        // /home -> item1(/home) = true
        // /home -> item1(/categroy) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        
        //return this.$route.path.indexOf(this.link) !== this.path
        //return this.$route.path.indexOf(this.link)?false:true
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        //判定是否处于活跃状态
        //如果活跃显示{color: this.activeColor}
        //如果不活跃则显示{}
        return this.isActive ? {color: this.activeColor} : {}
      },
    },
    methods: {
      itemClick () {
        // push 可以返回
        // replace 禁止返回
        this.$router.push(this.link)
      }
    },
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>