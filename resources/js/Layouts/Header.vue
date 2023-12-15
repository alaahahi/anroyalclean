<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Link } from '@inertiajs/inertia-vue3';
import ResponsiveNav from '@/Components/ResponsiveNav.vue';
import DarkModeToggle from '@/Components/DarkToggle.vue';
import axios from 'axios';
import {  onMounted, onBeforeUnmount } from "vue";

const navActive = ref(false);

const openNav = () => {
  navActive.value = true;
};

const closeNav = () => {
  navActive.value = false;
};



const i18n = useI18n();
let language =ref(i18n.locale.value);


const switchLocale = async (locale) => {
      try {
        const response = await axios.get(`/lang/${locale}`);
		language.value = locale; 
		i18n.locale.value = locale;
          localStorage.setItem('lang', locale);
		  window.location.reload();
  
      } catch (error) {
        console.error('An error occurred:', error);
      }
	};


</script>

<template>
		<header class="header">
		<div class="mblLst" :class="{'active':navActive}">
			<div class="mblLst__hdr flex-i justify-between">
				<a href="/" class="mblLst__logo">
					<img src="/assets/images/logo.png" alt="">
				</a>
				<div class="langbox">
					<div class="langboxmini" @click="switchLocale('en')" :class="{'active':language=='ar'}">
						<i class="fa-solid fa-earth-americas"></i>
						<p class="langboxmini__p">En</p>
					</div>
					<div class="langboxmini"  @click="switchLocale('ar')" :class="{'active':language=='en'}">
						<i class="fa-solid fa-earth-americas"></i>
						<p class="langboxmini__p">Ar</p>
					</div>
				</div>
				<div class="mblLst__close flex-a" @click="closeNav">
					<i class="fa-solid fa-xmark"></i>
				</div>
			</div>
			<ul class="mblLstnav">
				<li>
					<ResponsiveNav :href="route('/')" :class="{'active':route().current('/')}">
								{{ $t('home') }}
					</ResponsiveNav>
				</li>
				<li>
					<ResponsiveNav :href="route('about')" :class="{'active':route().current('about')}">
								About
					</ResponsiveNav>
				</li>
				<li>
					<ResponsiveNav :href="route('services')" :class="{'active':route().current('services')}">
								Services
					</ResponsiveNav>
				</li>
				<li>
					<ResponsiveNav :href="route('projects')" :class="{'active':route().current('projects')}">
							Projects
					</ResponsiveNav>
				</li>
				<li>
					<ResponsiveNav :href="route('contact')" :class="{'active':route().current('contact')}">
						Contact
					</ResponsiveNav>
				</li>
			</ul>
			<div class="mblLstFtr">
				<a href="mailto:info@royalclean.ae" class="mblLstFtr__link">
					<i class="fa-solid fa-envelope"></i>
					info@royalclean.ae
				</a>
				<a href="tel:+971565822000" class="mblLstFtr__link">
					<i class="fa-solid fa-phone"></i>
					+971565822000
				</a>
				<a href="#" class="mblLstFtr__link">
					<i class="fa-solid fa-clock"></i>
					Opening Hour: 9:00 am - 9:00 pm
				</a>
				<ul class="mblLstFtrList flex-i">
					<li>
						<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
					</li>
					<li>
						<a href="#"><i class="fa-brands fa-snapchat"></i></a>
					</li>
					<li>
						<a href="#"><i class="fa-brands fa-instagram"></i></a>
					</li>
					<li>
						<a href="#"><i class="fa-brands fa-tiktok"></i></a>
					</li>
					<li>
						<a href="#"><i class="fa-brands fa-twitter"></i></a>
					</li>
					<li>
						<a href="#"><i class="fa-brands fa-linkedin"></i></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="headertop">
			<div class="container">
				<div class="headertopWrpr flex-i justify-between">
					<ul class="htpList">
						<li class="htpList__item">
							<a href="#" class="htpList__link">
								<i class="fa-solid fa-envelope"></i>
								<span>info@royalclean.ae</span>
							</a>
						</li>
						<li class="htpList__item">
							<a href="#" class="htpList__link">
								<i class="fa-solid fa-phone"></i>
								<span>971565822000+</span>
							</a>
						</li>
						<li class="htpList__item">
							<a href="#" class="htpList__link">
								<i class="fa-solid fa-clock"></i>
								<span>Opening Hour: 9:00 am - 9:00 pm</span>
							</a>
						</li>
					</ul>
					<div class="htbox2 flex-i">
						<div class="htbox2Btn flex-a">Follow US</div>
						<ul class="smlist flex-i">
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-facebook-f"></i>
								</a>
							</li>
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-snapchat"></i>
								</a>
							</li>
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-instagram"></i>
								</a>
							</li>
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-tiktok"></i>
								</a>
							</li>
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-twitter"></i>
								</a>
							</li>
							<li class="smlist__item">
								<a href="#" class="smlist__link">
									<i class="fa-brands fa-linkedin-in"></i>
								</a>
							</li>
						</ul>
						<div class="langbox">
							<div class="langboxmini"   @click="switchLocale('en')" :class="{'active':language=='ar'}">
								<i class="fa-solid fa-earth-americas"></i>
								<p class="langboxmini__p">En</p>
							</div>
							<div class="langboxmini"  @click="switchLocale('ar')" :class="{'active':language=='en'}">
								<i class="fa-solid fa-earth-americas"></i>
								<p class="langboxmini__p">Ar
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<div class="headerBtm">
			<div class="container">
				<div class="headerBtmWrpr flex-i justify-between">
					<div class="flex-i headerBtmbox1">
						<a href="/" class="logo flex-a">
							<img src="/assets/images/logo.png" alt="" class="logo__img">
						</a>
						<ul class="headerBtmList flex-i">
							<li class="headerBtmList__item">
								<ResponsiveNav
									class="headerBtmList__link"
									:href="route('/')"
									:class="{'active':route().current('/')}"
								>
								{{ $t('home') }}
								</ResponsiveNav>
							</li>
							<li class="headerBtmList__item">
								<ResponsiveNav
									class="headerBtmList__link"
									:href="route('about')"
									:class="{'active':route().current('about')}"
								>
									About
								</ResponsiveNav>
							</li>
							<li class="headerBtmList__item">
								<ResponsiveNav
									class="headerBtmList__link"
									:href="route('services')"
									:class="{'active':route().current('services')}"
								>
									Our Services
								</ResponsiveNav>
							</li>
							<li class="headerBtmList__item">
								<ResponsiveNav
									class="headerBtmList__link"
									:href="route('projects')"
									:class="{'active':route().current('projects')}"
								>
								Our Projects
								</ResponsiveNav>

							</li>
							<li class="headerBtmList__item">
								<ResponsiveNav
								class="headerBtmList__link"

									:href="route('contact')"
									:class="{'active':route().current('contact')}"
								>
								Contact
								
								</ResponsiveNav>
							</li>
						</ul>
					</div>
					<button type="button" class="hdrformBtn" data-bs-toggle="modal" data-bs-target="#hdrform">
						Get Quote
					</button>
					<div class="hdrbtn flex-a" @click="openNav">
						<i class="fa-solid fa-bars-staggered"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="hdrform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Get <span>Quote</span> </h1>
						<div type="button" class="closbtn" data-bs-dismiss="modal">
						<i class="fa-solid fa-xmark"></i>
						</div>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Full Name" value="">
						</div>
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Email Address" value="">
						</div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Phone Number" value="">
						</div>
						<div class="form-group">
							<textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Write Here" style="height: 141px;"></textarea>
						</div>
						<div class="text-center">
							<button type="submit"><i class="fas fa-paper-plane"></i>Send</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>


</template>