<template>
  <div>
    <div class="detail_wrap" @click="handerClickBanner">
      <router-link class="iconfont return_back" to='/'>&#xe61b;</router-link>
      <div class="detail_header">
        <img src="http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_600x330_6dddcf68.jpg" alt="">
      </div>
      <div class="detail_info">
        <div>8</div>
        <div class="info_title">故宫（AAAA景区）</div>
      </div>
    </div>
    <detail-banner @handelGalleyClose='detailGalleyClose' v-show="isBannerShow"></detail-banner>
  </div>
</template>

<script>
import detailBanner from '@/components/detail/Banner.vue'
export default {
    components:{
      detailBanner
    },
    data(){
      return {
        isBannerShow:false
      }
    },
    methods:{
      handerClickBanner(){
        this.isBannerShow = true
      },
      detailGalleyClose(){
        this.isBannerShow = false
      }
    }
}
</script>

<style scoped lang="stylus">
  .return_back{
    position absolute
    top .36rem
    left .2rem
    color #fff
    font-size .4rem
    background-color: rgba(0, 0, 0, .8);
  }
  .detail_wrap{
    position relative
    top 0
    left 0
  }
  .detail_header{
    width 100%
    height 0
    padding-bottom 55%
  }
  .detail_header img{
    width 100%
    vertical-align top
  }
  .detail_info{
    position absolute
    font-size 0.32rem
    color #fff
    bottom: .36rem;
    left: .2rem;
  }
  .detail_info .info_title{
    padding-top .1rem
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  }

</style>