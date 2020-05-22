<template>
  <div class="swiper_wrap">
    <swiper :options="swiperOptions" v-if="isSwiperShow">
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="sw-img" :src="item.imgUrl" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name:"Banner",
    props:{
      "swiperList":Array
    },
    data() {
      return {
        swiperOptions: {
          loop:true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },

        }
      }
    },
    computed:{
      isSwiperShow(){
        return this.swiperList.length
      }
    }

}
</script>

<style scoped lang="stylus">
    .sw-img{
      width 100%
    }
    .swiper-container >>> .swiper-pagination-bullet-active{
      background  #fff
    }
</style>
