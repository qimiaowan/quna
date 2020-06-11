<template>
  <div class="home">
      <!-- <home-header :home-city="city"></home-header> -->
      <home-header></home-header>
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

import {mapState} from 'vuex'

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
      // "city":"",
      "swiperList":[],
      "iconsList":[],
      "recommendList":[],
      "lastCity":""
    }
  },
  created(){
    // this.$store.dispatch('changeCityName',localStorage.getItem("city"))
    this.$store.commit("changeCityName",localStorage.getItem("city"))
    this.lastCity = this.city;
  },
  computed:{
    ...mapState([
      "city"
    ])
  },
  mounted(){

    this.getListFun()
  },
  methods:{
    getListFun(){
      return this.axios.get(`${process.env.BASE_URL}mock/index.json?city=`+this.city).then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      var data = res.data&&res.data.data;

      // this.city = data.city;
      this.swiperList = data.swiperList;
      this.iconsList = data.iconsList;
      this.recommendList = data.recommendList;
    }
  },
  activated(){


    if(this.lastCity!=this.city){
      this.getListFun()
    }
    console.log("activated");
  },
  deactivated(){
    console.log("deactivated");

  }
}
</script>
