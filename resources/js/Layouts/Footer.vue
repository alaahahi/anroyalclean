
<script setup>
import ResponsiveNav from '@/Components/ResponsiveNav.vue';


</script>

<template>
<div>
<!-- hmsuccess end -->
<footer class="footer">
		<div class="footertop">
			<div class="container">
				<div class="row footertopRow">
					<div class="col-md-6 col-lg-4">
						<div class="footertopBox">
							<a href="/" class="footertopBox__logo">
								<img src="assets/images/logo.png" alt="" class="footertopBox__logo-img">
							</a>
							<p class="footertopBox__desc">
								Royal Clean Master Cleaning started its activity in July 2021, and as a company specialized in providing comprehensive cleaning solutions and trustworthy steam cleaning services, we dedicate ourselves to providing effective and accurate cleaning solutions that save time, effort and peace of mind for our clients. The company is equipped to raise the level of standards for providing hygiene services.
							</p>
							<ul class="footertopBoxsmList">
								<li>
									<a href="#">
										<i class="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa-brands fa-snapchat"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa-brands fa-tiktok"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa-brands fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="footertopBox footertopBox2">
							<h2 class="footertopBox__h2">CONTACT US</h2>
							<ul class="footertopBoxList">
								<li class="footertopBox__item">
									<i class="fa-solid fa-location-dot"></i>
									<span>
										Abu Dhabi, Bin Ghanim tower , behind Al Masref bank, at intersection of Hamdan Street, with Al Salam street
									</span>
								</li>
								<li class="footertopBox__item">
									<i class="fa-solid fa-phone"></i>
									<a href="tel:+971565822000">
										+971565822000
									</a>
								</li>
								<li class="footertopBox__item">
									<i class="fa-solid fa-envelope"></i>
									<a href="mailto: info@royalclean.ae">
										info@royalclean.ae
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="footertopBox footertopBox3">
							<h2 class="footertopBox__h2">LINKS</h2>
							<ul class="footertopBox3List">
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
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footerbtm">
			<div class="container">
				<div class="footerbtm-wrpr flex-i justify-between">
					<div class="footerbtmBox flex-i">
						<p>Design & Development</p>
						<a href="#">Skilledtech.co</a>
					</div>
					<p class="footerbtmBox__p">© 2023 Copyright Royal Clean Master Company</p>
				</div>
			</div>
		</div>
	</footer>
</div>
</template>