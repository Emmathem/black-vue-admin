<template>
  <div class="backgroundCover">
    <!-- <AppHeader /> -->
    <Nuxt />
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader';
import AppFooterVue from '@/components/layouts/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooterVue,
  },
}
</script>
<style lang="scss" scoped>
</style>
