<script setup>
import {ref, onMounted} from "vue";
import "intersection-observer"; // for cross-browser support
import MainLayout from '@/Layouts/MainLayout.vue';
import HomeBanner from '@/Components/HomeBanner.vue';
import HomeAbout from '@/Components/HomeAbout.vue';
import HomeClients from '@/Components/HomeClients.vue';
import HomeServices from '@/Components/HomeServices.vue';


import RecentProjects from '@/Components/RecentProjects.vue';

import HomeContact from '@/Components/HomeContact.vue';
import { Link } from '@inertiajs/inertia-vue3';
import Vue3AutoCounter from 'vue3-autocounter';

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useForm } from '@inertiajs/vue3'

const openForm = ref(0);

// Toggle the value of openForm
const toggleOpenForm = () => {
  openForm.value = openForm.value === 1 ? 0 : 1;
}

defineProps({
    meta: String,
    slider: Object,
    contact_us: Object,
    abouts: Object,
    services: Object,
    clients: Object,
    types_members: Object,
    members: Object,
    types_project: Object,
    projects: Object,
    questions: Object,
    projects_count: Object,
    clients_count: Object,
    locale: {
        type: String,
    },
})

const modules = [Autoplay];

// Import Swiper styles
import "swiper/css";
let swiperRef = null;

const setSwiperRef = (swiper) => {
  swiperRef = swiper;
};
const slideNext = () => {
  swiperRef.slideNext();
};

const slidePrev = () => {
  swiperRef.slidePrev();
};

const showContent = ref(true);


const toggleAnswer = (question) => {
  question.isOpen = !question.isOpen;
};



const form = useForm({
  from: '',
  email: '',
  phone: '',
  message: '',
})

function submit() {
  openForm.value =0
  form.post('/message')

}


</script>



<template>
  <MainLayout :isHome="true">
    <HomeBanner />
    <HomeAbout />
    <HomeServices />
    <RecentProjects />
    <HomeClients />
    <HomeContact />
    <section class="map"  v-scroll-reveal-fade-up="{delay:'50'}">
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29045.128855864074!2d54.368449!3d24.497889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e674cfedf9ecb%3A0x4b962449bcd2e098!2sAl%20Salam%20Tower!5e0!3m2!1sen!2sae!4v1660052522304!5m2!1sen!2sae"></iframe>
	  </section>
  </MainLayout>
</template>