<template>
  <a-layout>
    <the-header></the-header>
    <home-view></home-view>
    <the-footer></the-footer>
  </a-layout>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeView from '@/views/HomeView.vue';
export default {
  name: 'App',
  components: { 
    TheHeader,
    TheFooter,
    HomeView,
  },
}
</script>


