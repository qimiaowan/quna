<template>
    <div class="city">
        <header-city></header-city>
        <list-city :hot-cities="hotCities" :cities="cities"></list-city>
    </div>
</template>

<script>
import headerCity from '@/components/city/headerCity.vue'
import listCity from '@/components/city/listCity.vue'
export default {
    name:"city",
    components:{
        headerCity,
        listCity
    },
    data(){
        return {
            hotCities: [],
			cities: {}
        }
    },

    mounted(){
        this.getListFun();
    },
    methods:{
        getListFun(){
            this.axios.get(`${process.env.BASE_URL}mock/city.json`).then(this.getCityInfoSuccess)
        },
        getCityInfoSuccess(res){
            var data = res.data&&res.data.data;
            this.hotCities = data.hotCities;
            this.cities = data.cities;
        }
    }
}
</script>

<style scoped lang="stylus">

</style>