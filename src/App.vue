<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavigationVue from "./components/Navigation.vue";
import FooterVue from "./components/Footer.vue";
</script>
<template>
    <NavigationVue />
    <router-view />
    <FooterVue />
</template>
