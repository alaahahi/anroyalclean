<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import 'swiper/css/navigation';

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


</script>
<template>
	<h4 class="clients__h4">Our Customers</h4>
	<div class="clientsSl swiper">
		<swiper
				ref="{swiperRef}"
				:modules="[Autoplay]"
				:navigation="true"
				:slides-per-view="6"
				:space-between="10"
				:loop="true"
				:speed="500"
				@swiper="setSwiperRef"
				style="padding: 20px 0;"
				:autoplay="{
						delay: 1500,
						disableOnInteraction: false,
						}"
						> 
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/1.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/2.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/3.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/4.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/5.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/6.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/7.png" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/8.jpg" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/9.jpg" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/10.jpg" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/11.jpg" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide">
				<div class="clientsSlCrd">
					<img src="assets/images/logo/12.jpeg" alt="" class="clientsSlCrd__img">
				</div>
			</swiper-slide>
		</swiper>
		<div class="swiper-button-prev clientsSlArr clientsSlArr1" @click="slidePrev">
			<i class="fa-solid fa-chevron-left"></i>
		</div>
		<div class="swiper-button-next clientsSlArr clientsSlArr2" @click="slideNext"> 
			<i class="fa-solid fa-chevron-right"></i>
		</div>
	</div>
</template>