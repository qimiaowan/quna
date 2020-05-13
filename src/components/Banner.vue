<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in list" :key="item.num">
        <img class="sw-img" :src="item.img" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name:"Banner",
    data() {
      return {
        list:[{
            num:0,
            img:"https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
        },{
            num:1,
            img:"https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
        }],
        swiperOptions: {
          loop:true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },

        }
      }
    },

}
</script>

<style scoped lang="stylus">
    .sw-img{
        width 100%
    }
</style>
