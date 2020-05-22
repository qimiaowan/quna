<template>
    <div class="list_city" ref="listWrapper">
		<div>
			<div class="hot-cities">
				<div class="hot-cts-title">热门城市</div>
				<ul class="clearfix">
					<li v-for="item in computedCities"
							:key="item.id"
							:class="item.borderType"
                    >
						{{ item.name }}
					</li>
				</ul>
			</div>
			<div class="alphabet-menu">
				<div class="alphabet-menu-title">字母排序</div>
				<ul class="clearfix">
					<li v-for="(item, index) in letters" :key="index" @click="clickHrefFun(item)">{{ item }}</li>
				</ul>
			</div>
			<div class="alphabet-list" v-for="(item, key) in cities" :key="key" :ref="key">
				<div class="alphabet-list-title">{{ key }}</div>
				<ul class="clearfix">
					<li
						v-for="innerItem in item"
						:key="innerItem.id"
						>
						{{ innerItem.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
    import BScroll from 'better-scroll'

    export default {
        name:"listCity",
        props:{
            hotCities:Array,
            cities:Object
        },
        data(){
            return {
				letter:""
            }
		},
		mounted(){
			this.scrollMove = new BScroll(this.$refs.listWrapper,{
				click:true
			})
		},
        computed:{
            computedCities(){
				var arr = [];
                for(var i = 0;i<this.hotCities.length;i++ ){
                    var item = this.hotCities[i];
                    var resObj = {};
                        resObj.name = this.hotCities[i].name;
                        resObj.id = this.hotCities[i].id;

                    if (item.order === 1) {
					resObj.borderType = '';
                    } else if (item.order === 2 || item.order === 3) {
                        resObj.borderType = 'border-left';
                    } else if (item.order % 3 === 1) {
                        resObj.borderType = 'border-top';
                    } else {
                        resObj.borderType = 'border-topleft';
                    }
                    arr.push(resObj);
                }


                return arr;
			},
			letters(){
				return Array.from(Object.keys(this.cities));
			}
		},
		methods:{
			clickHrefFun(item){
				this.letter = item
			}
		},
		watch:{
			letter(){
				this.scrollMove.scrollToElement(this.$refs[this.letter][0]);
			}
		}

    }
</script>
<style scoped lang="stylus">
div {
	box-sizing: border-box;
}

.clearfix::after {
	display: block;
	content: "";
	clear: both;
}

.list_city {
	position: absolute;
	top: 0.88rem;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
}

.hot-cities {
	width: 100%;
	height: 4.32rem;
}

.hot-cities .hot-cts-title,
.alphabet-menu .alphabet-menu-title,
.alphabet-list .alphabet-list-title {
	width: 100%;
	height: .72rem;
	line-height: .72rem;
	padding: 0 .2rem;
	background-color: #F5F5F5;
}

.hot-cities ul li {
	float: left;
	width: 33.33%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}

.alphabet-menu ul {
	height: 4.2rem;
	margin: .3rem 0;
	// display flex;
	display: grid;
    grid-template-columns:repeat(5,1fr);
	justify-items: center;
    align-items: center;
}

.alphabet-menu ul li {
	// height: .9rem;
	// line-height: .9rem;
	// text-align: center;
}

.alphabet-list ul li {
	float: left;
	width: 25%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}
</style>