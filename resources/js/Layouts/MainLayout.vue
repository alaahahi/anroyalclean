<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Header from "@/Layouts/Header.vue";
import Footer from "@/Layouts/Footer.vue";

defineProps({
    isHome: {
        type: Boolean,
        default: false,
    },})


</script>

<template>
    <Header></Header>
      	<!-- header end -->

        <slot ></slot>
    <Footer></Footer>
</template>
