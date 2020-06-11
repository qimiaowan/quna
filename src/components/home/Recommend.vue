<template>
    <div class="recommend_wrap">
        <div class="recommend_title">
            猜你喜欢
        </div>
        <div class="recommend_list">
            <ul>
                <router-link v-for="item in this.recommendList" :key="item.id" tag="li" :to="'detail/'+item.id" class="list_item">
                    <div class="item_wrap">
                        <div class="item_img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="item_info">
                        <div class="info_title">{{item.title}}</div>
                        <div class="info_comment">
                            <span v-for="(s,idx) in starCom(4)" :key="idx" class="icon_star">★</span>
							<span class="comment-num">{{item.comment}}条评论</span>
                        </div>
                        <div class="info_desc">
                            <span class="price">¥<em class="price_num">{{item.price}}</em></span>起
                            <span class="address">{{item.district}}</span>
                        </div>
                    </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        "recommendList":Array
    },
    data(){
        return {

        }
    },
    methods:{
        starCom(star){
            return Math.round(star)>5?5:Math.round(star);
        }
    }
}
</script>

<style scoped lang="stylus">

    .recommend_title{
        padding .2rem .3rem
        font-size .32rem
        color: #212121
        background #f5f5f5
    }
    .recommend_list{
        background #fff
    }
    .recommend_list ul{
        padding-top .2rem
    }
    .list_item{
        width: 100%
    }
    .item_wrap{
        display flex
	    height: 2rem
        padding .2rem
    }
    .item_img{
       width 2rem
       height 2rem
    }
    .item_img img{
        width 100%
        height 100%
    }
    .item_info{
        flex 1
        padding-left .22rem
    }
    .info_title{
        padding-top: .26rem;
        color: #212121;
        font-size: .32rem;
    }
    .info_comment{
        padding-top: .26rem;
    }
    .info_comment .icon_star{
        color #ffb436
    }
    .info_desc{
        height .4rem
        line-height .4rem
        padding-top .26rem
        overflow hidden
    }
    .info_desc .price{
        float left
        color #ffb436
    }
    .info_desc .price .price_num{
        font-size .4rem
    }
    .info_desc .address{
        float right
    }

</style>