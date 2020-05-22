<template>
  <div class="home">
      <home-header :home-city="city"></home-header>
      <home-banner :swiper-list="swiperList"></home-banner>
      <home-icons :icons-list="iconsList"></home-icons>
      <home-recommend :recommend-list="recommendList"></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/Header.vue'
import Banner from '@/components/home/Banner.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'


export default {
  name: 'Home',
  components: {
    homeHeader:Header,
    homeBanner:Banner,
    homeIcons:Icons,
    homeRecommend:Recommend,
  },
  data(){
    return {
      "city":"",
      "swiperList":[],
      "iconsList":[],
      "recommendList":[]
    }
  },
  mounted(){
    this.getListFun()
  },
  methods:{
    getListFun(){
      this.axios.get(`${process.env.BASE_URL}mock/index.json`).then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      var data = res.data&&res.data.data;

      this.city = data.city;
      this.swiperList = data.swiperList;
      this.iconsList = data.iconsList;
      this.recommendList = data.recommendList;
    }
  }
}
</script>
