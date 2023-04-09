<template>
  <HeaderComponent v-if="!$route.meta.hideHeader" />
  <router-view></router-view>
  <!-- <div>App Component</div> -->
</template>

<script>
import HeaderComponent from './components/Header.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
</style>
