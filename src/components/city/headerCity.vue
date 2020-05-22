<template>
    <div class="header_city">
        <router-link to="/">
			<span class="iconfont city-back">&#xe61b;</span>
		</router-link>
        城市
    </div>
</template>

<script>
export default {
    name:"header_city"
}
</script>

<style scoped lang="stylus">
    @import '../../assets/common.styl'
    .header_city{
        position: relative
        width 100%
        height: .88rem
        line-height: .88rem
        text-align: center
        color: #fff
        background $bgColor
    }
    .header_city .city-back {
        position: absolute
        top: 0
        left: .2rem
        color: #fff
    }
</style>