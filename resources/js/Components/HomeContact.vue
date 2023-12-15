<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import Vue3AutoCounter from 'vue3-autocounter';
import { ref, onMounted,onUnmounted  } from "vue";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const scrollPosition = ref(0);
const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)
const counter4 = ref(null)

const run = ref(true);

// Function to handle the scroll event
const handleScroll = () => {
  // Get the scroll position from the window object
  scrollPosition.value = window.scrollY || window.pageYOffset;
  if(scrollPosition.value>1000 && run.value==true) {
   counter1.value.start();
   counter2.value.start();
   counter3.value.start();
   counter4.value.start();

	run.value=false;
  }
};

// Attach the scroll event listener when the component is mounted
onMounted(() => {
if(!cookies.get('lnag')){
    cookies.set("lnag", "en");
}
if(!localStorage.getItem('lang')){
	localStorage.setItem('lang', "en");
}
  window.addEventListener('scroll', handleScroll);
});

// Remove the scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>
<template>
	<section class="contact">
		<div class="container">
			<h1 class="contact__h1">Contact US</h1>
			<div class="row">
				<div class="col-lg-6" v-scroll-reveal-fade-up="{delay:'50'}" >
					<div class="contactBox">
						<h3>Royal Clean Master</h3>
						<ul class="contactBoxList">
							<li class="contactBoxList__item">
								<i class="fa-solid fa-chevron-right"></i>
								<span>
									Royal Clean Master Cleaning started its activity in July 2021, and as a company specialized in providing comprehensive cleaning solutions and trustworthy steam cleaning services, we dedicate ourselves to providing effective and accurate cleaning solutions that save time, effort and peace of mind for our clients. The company is equipped to raise the level of standards for providing hygiene services
								</span>
							</li>
							<li class="contactBoxList__item">
								<i class="fa-solid fa-chevron-right"></i>
								<span>
									Abu Dhabi, Bin Ghanim tower , behind Al Masref bank, at intersection of Hamdan Street, with Al Salam street
								</span>
							</li>
							<li class="contactBoxList__item">
								<i class="fa-solid fa-chevron-right"></i>
								<span>
									971565822000+
								</span>
							</li>
							<li class="contactBoxList__item">
								<i class="fa-solid fa-chevron-right"></i>
								<span>
									info@royalclean.ae
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-6"   v-scroll-reveal-zoom-in="{delay:'150'}" >
					<form class="contactBoxform">
						<h3>Get In <span>Touch</span> </h3>
						<input type="text" class="contactBoxform__input" placeholder="Name">
						<input type="text" class="contactBoxform__input" placeholder="E-Mail">
						<input type="text" class="contactBoxform__input" placeholder="Phone">
						<textarea class="contactBoxform__textarea" placeholder="Message"></textarea>
						<button class="contactBoxform-btn flex-a">
							<i class="fa-solid fa-paper-plane"></i>
							Get in touch
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>