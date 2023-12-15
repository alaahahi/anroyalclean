<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
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
	<section class="recentProjects">
		<div class="container">
			<div class="top" v-scroll-reveal-fade-up="{delay:'50'}" >
				<span>Recent Project</span>
				<h3>Let's See Our Recent Project Case</h3>
			</div>
			<div class="recntsl swiper">
				<Swiper
				ref="{swiperRef}"
				:navigation="true"
				:slides-per-view="3"
				:space-between="10"
				:loop="true"
				:speed="1200"
				@swiper="setSwiperRef"
				 >
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/1.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng">carpet deep cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/2.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/3.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/4.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> carpet deep cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/5.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> carpet deep cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/7.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/8.jpeg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> carpet Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/9.jpeg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Chairs Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/10.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Chairs Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/11.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/12.jpeg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> chair Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/13.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/14.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Car Seats Deep Cleaning </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/15.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> ceramic lustering </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/16.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Bed Mattress Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/17.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Carpet Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/18.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Moket Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/19.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/20.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> Sofa Deep Cleaning  </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="recntslCrd">
							<div class="recntslCrdHolder">
								<img src="assets/images/projects/21.jpg" alt="" class="recntslCrdHolder-img">
							</div>
							<div class="recntslCrdBody flex-i justify-between">
								<a href="#" class="recntslCrdBody__hdng"> ceramic lustering   </a>
								<a href="#" class="icon flex-a">
									<i class="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="swiper-button-prev recntslArr recntslArr2 flex-a r-50" @click="slidePrev">
					<i class="fa-solid fa-chevron-left"></i>
				</div>
				<div class="swiper-button-next recntslArr recntslArr1 flex-a r-50" @click="slideNext">
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
			<a href="projects.html" class="recentProjects__link flex-a">
				<i class="fa-solid fa-arrow-right"></i>
			</a>
		</div>
	</section>
	<!-- recentProjects end -->
</template>
