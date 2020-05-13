<template>
  <div class="home">
      <home-header></home-header>
      <home-banner></home-banner>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    homeHeader:Header,
    homeBanner:Banner
  }
}
</script>
