<template>
  <div class="header">
      <div class="header_left">
        <span class="iconfont">&#xe61b;</span>
      </div>
      <div class="header_search">
         <div class="kw">
           <span class="iconfont icon_search">&#xe698;</span>
           <span class="search_txt">旅游什么的</span>
         </div>
        <input type="search" class="input_search" disabled>
      </div>
      <div class="header_pos">
        <router-link to="/city">
          <!-- {{this.$store.state.city}} -->
          {{this.city}}
          <span class="iconfont">&#xe6aa;</span>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  // props:{
  //   "homeCity":String
  // }
  computed:{
    ...mapState([
      "city"
    ])
  }
}
</script>
<style scoped lang="stylus">
  @import '../../assets/common.styl'
  .header{
    display flex
    width 100%
    height .88rem
    color #fff
    background $bgColor
  }
  .header_left{
    width .8rem
    height .88rem
    line-height .88rem
    text-align center
  }
  .header_search{
    flex 1
    position relative
    height .88rem
  }
  .input_search{
    position absolute
    margin .14rem 0
    width 100%
    height .55rem
    border-radius .06rem
    background #fff
  }
  .kw{
    position absolute;
    top .14rem
    left .2rem
    z-index 1
    height .55rem
    line-height .55rem
    color #e4e7ea

  }
  .icon_search{
    display: inline-block
    vertical-align: middle
    margin-right .1rem
  }

  .header_pos{
    min-width 1rem
    height .88rem
    line-height .88rem
    padding 0 .1rem
    text-align center
  }
  .header_pos a{
    color #fff
  }


</style>
