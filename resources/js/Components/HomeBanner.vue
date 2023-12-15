<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

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

defineProps({
    on: Boolean,
});
</script>

<template>
	<section class="hero">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="heroBox">
						<img src="assets/images/banner.png" alt="" class="heroBox__img">
					</div>
				</div>
				<div class="col-md-7">
					<div class="heroBox"  v-scroll-reveal-fade-up="{delay:'50'}">
						<h5 >Innovative cleaning world</h5>
						<h2>
							The first machine in the Middle East and in UAE that keeps pace with the updates in the world of dry cleaning with high capabilities, ideal cost, and perfect service.
						</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
