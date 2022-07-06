<template>
  <TheHeaderVue></TheHeaderVue>
  <TheSiderVue></TheSiderVue>
  <TheFooterVue></TheFooterVue>
</template>

<script>
import TheFooterVue from './components/TheFooter.vue'
import TheHeaderVue from './components/TheHeader.vue'
import TheSiderVue from './components/TheSider.vue'


export default {
  name: 'App',
  components: {
    TheFooterVue,
    TheHeaderVue,
    TheSiderVue,
  }
}
</script>

