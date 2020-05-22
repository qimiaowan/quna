<template>
  <div class="icons_wrap">
    <swiper :options="swiperOptions">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon_box" v-for="item in page" :key="item.id">
                <div class="icon_img_box"><img :src="item.imgUrl" alt=""></div>
                <p>{{item.description}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name:"Icons",
    props:{
        "iconsList":Array
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },

        }
      }
    },
    computed:{
        pages:function(){
            const pagesArr = [];
            this.iconsList.forEach((item,idx)=>{
                let page = Math.floor(idx/8);
                if(!pagesArr[page]){
                    pagesArr[page] = [];
                }
                pagesArr[page].push(item);

            })
            return pagesArr;

        }
    }

}
</script>

<style scoped lang="stylus">
    @import '../../assets/common.styl'
    .icons_wrap{
        width 100%
        height 0
        padding-bottom 55%
        margin .2rem 0
    }
    .icons_wrap .swiper-container{
        padding-bottom .6rem
    }
    .icon_box{
        position relative
        float left
        width 25%
        height 0
        padding-bottom 25%
        text-align center
    }
    .icon_img_box{
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
    }
    .icon_box .icon_img_box img{
        display block
        height 100%
        margin 0 auto
    }
    .icon_box p{
        position absolute
        bottom 0
        left 0
        right 0
        height .44rem
        line-height .44rem
        text-align center
        ellipsis()

    }
</style>
