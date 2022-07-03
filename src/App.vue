<template>
  <a-layout>
    <the-header></the-header>
    
    <the-footer></the-footer>
  </a-layout>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  name: 'App',
  components: { 
    TheHeader,
    TheFooter,
  },
}
</script>


