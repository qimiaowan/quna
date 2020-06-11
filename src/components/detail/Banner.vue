<template>
	<div class="gallery-container" @click="handleGalleryClick">
		<div class="img-wrapper">
			<swiper :options="swiperOptions">
	      <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1807/92/92f857221c01059fa3.img.jpg_r_800x800_77f2770c.jpg" alt />
	      </swiper-slide>
	      <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1807/92/92f857221c01059fa3.img.jpg_r_800x800_77f2770c.jpg" alt />
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
		</div>
	</div>
</template>
<script>
export default {
  name:"detail_banner",
  data(){
    return {
     swiperOptions: {
        pagination:{
              el: '.swiper-pagination',
              type: 'fraction',
        },
				observer: true,
				observeParents: true
			}
    }
  },
  methods:{
    handleGalleryClick(){
      this.$emit('handelGalleyClose');
    }
  }
};
</script>

<style scoped lang="stylus">
  div {
	display: flex;
}

.gallery-container >>> .swiper-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.gallery-container >>> .swiper-slide {
	flex-direction: column;
	justify-content: center;
}

.gallery-container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	z-index: 99;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
}

.gallery-container .img-wrapper {
	width: 100%;
	height: 0;
	padding-bottom: 100%;
}

.gallery-container .img-wrapper img {
	width: 100%;
}

.gallery-container .img-wrapper .swiper-pagination {
	bottom: .48rem;
	color: #fff;
	justify-content: center;
}

</style>