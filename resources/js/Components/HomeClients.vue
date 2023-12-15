<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import OurCustomers from '@/Components/OurCustomers.vue';

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
	<section class="clients">
		<div class="container">
			<div class="text-center top"   v-scroll-reveal-fade-up="{delay:'50'}" >
				<span>customers review</span>
				<h3>What Our Client Say </h3>
			</div>
			<div class="reviesl swiper">
				<swiper
				ref="{swiperRef}"
				:modules="[Autoplay]"
				:navigation="true"
				:slides-per-view="2"
				:space-between="10"
				:loop="true"
				:speed="800"
				@swiper="setSwiperRef"
				style="padding: 20px 0;"
				:autoplay="{
						delay: 1000,
						disableOnInteraction: false,
						}"
						> 
					<swiper-slide class="swiper-slide">
						<div class="clientsCard">
							<div class="clientsCardBox1">
								<img src="assets/images/user.png" alt="" class="clientsCardBox1__img">
								<h3 class="clientsCardBox1__hdng">Johance Luci</h3>
								<span>Bussines Man</span>
							</div>
							<div class="clientsCardBox2">
								<p class="clientsCardBox2__p">
									I was pleased with the accuracy of the work and the speed of performance, which will make me a permanent customer. 
								</p>
								<ul class="flex-i">
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
								</ul>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clientsCard">
							<div class="clientsCardBox1">
								<img src="assets/images/user2.png" alt="" class="clientsCardBox1__img">
								<h3 class="clientsCardBox1__hdng">Tom Herny</h3>
								<span>Hotel Manager</span>
							</div>
							<div class="clientsCardBox2">
								<p class="clientsCardBox2__p">
									The work was perfect, you see the difference once the work is done. 
								</p>
								<ul class="flex-i">
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
								</ul>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clientsCard">
							<div class="clientsCardBox1">
								<img src="assets/images/user.png" alt="" class="clientsCardBox1__img">
								<h3 class="clientsCardBox1__hdng">Johance Luci</h3>
								<span>Bussines Man</span>
							</div>
							<div class="clientsCardBox2">
								<p class="clientsCardBox2__p">
									I was pleased with the accuracy of the work and the speed of performance, which will make me a permanent customer. 
								</p>
								<ul class="flex-i">
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
								</ul>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clientsCard">
							<div class="clientsCardBox1">
								<img src="assets/images/user2.png" alt="" class="clientsCardBox1__img">
								<h3 class="clientsCardBox1__hdng">Tom Herny</h3>
								<span>Hotel Manager</span>
							</div>
							<div class="clientsCardBox2">
								<p class="clientsCardBox2__p">
									The work was perfect, you see the difference once the work is done. 
								</p>
								<ul class="flex-i">
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
									<li><i class="fa-solid fa-star"></i></li>
								</ul>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<OurCustomers />
		</div>
	</section>
</template>