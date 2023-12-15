<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
    <MainLayout>
      <section class="banner-sub-page" v-scroll-reveal-fade-up="{delay:'20'}" >
		<div class="container">
			<div class="banner-sub-page-wrpr flex-i justify-between">
				<h2 class="banner-sub-page-h2">Our Projects</h2>
				<ul class="flex-i">
					<li> Home </li>
					<li>
						<i class="fas fa-chevron-right"></i>
					</li>
					<li class="active">Our Projects</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="propage">
		<div class="container-fluid">
			<ul class="propageList flex-i"  role="tablist">
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn active" data-bs-toggle="pill" data-bs-target="#a1" type="button" role="tab" aria-selected="true">
						All
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a2" type="button" role="tab" aria-selected="false">
						Sofa
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a3" type="button" role="tab" aria-selected="false">
						Carpet
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a4" type="button" role="tab" aria-selected="false">
						Moket
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a5" type="button" role="tab" aria-selected="false">
						Cars
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a6" type="button" role="tab" aria-selected="false">
						Bed Matters
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a7" type="button" role="tab" aria-selected="false">
						Ceramic Lustering
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a8" type="button" role="tab" aria-selected="false">
						Sterilization and disinfection
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a9" type="button" role="tab" aria-selected="false">
						Chairs
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a10" type="button" role="tab" aria-selected="false">
						Video
					</div>
				</li>
				<li class="propageList__item" role="presentation">
					<div class="propageList__btn" data-bs-toggle="pill" data-bs-target="#a11" type="button" role="tab" aria-selected="false">
						Mosque
					</div>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="a1" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/1.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/2.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/3.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/4.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/5.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/6.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/7.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/8.jpeg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/9.jpeg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/10.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/11.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/12.jpeg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/13.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/14.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/15.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/16.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/17.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/18.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/19.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/20.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/21.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/22.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/23.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/24.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/25.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/26.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/27.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/28.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/29.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/30.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/31.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/32.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/33.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/34.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/35.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/36.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/37.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/38.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/39.jpg" alt="" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/40.jpg" alt="" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a2" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/2.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/6.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/7.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/7.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/13.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/20.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/26.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/26.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/28.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/35.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/36.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/40.jpg" alt="sofa" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a3" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/1.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/5.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/8.jpeg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/17.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/18.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/28.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/37.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/38.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/41.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/47.jpg" alt="carpet" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/48.jpeg" alt="carpet" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a4" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/18.jpg" alt="moket" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/48.jpeg" alt="moket" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/29.jpg" alt="moket" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a5" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/14.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/22.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/24.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/33.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/33.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/43.jpg" alt="Car dry clean" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a6" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/28.jpg" alt="Bed matters dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/16.jpg" alt="Bed matters dry clean" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a7" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/15.jpg" alt="Creamic lustering dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/21.jpg" alt="Creamic lustering dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/23.jpg" alt="Creamic lustering dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/27.jpg" alt="Creamic lustering dry clean" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a8" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/30.jpg" alt="Sterilization and disinfection dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/22.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/31.jpg" alt="Sterilization and disinfection dry clean" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a9" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/9.jpeg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/10.jpg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/12.jpeg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/44.jpg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/45.jpg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<img src="assets/images/projects/46.jpg" alt="chairs dry clean" class="prgpgimg">
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a10" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/1.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/2.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/3.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/4.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/5.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/6.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/7.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/8.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/9.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/10.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/11.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/12.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/13.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/14.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/15.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/16.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/17.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/18.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/19.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/20.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/21.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/22.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="a11" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/23.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/24.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4">
							<div class="prgpgimgHol">
								<video src="assets/images/projects/videos/25.mp4" muted controls class="prgpgimgHolVideo"></video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </MainLayout>
</template>
<style scoped>


.banner-sub-page {
  padding: 40px 0;
  background: url(/assets/images/about-bg.jpg);
}
@media (max-width: 539px) {
  .banner-sub-page {
    padding: 25px 0;
  }
}
.banner-sub-page .banner-sub-page-h2 {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  text-transform: capitalize;
}
@media (max-width: 539px) {
  .banner-sub-page .banner-sub-page-h2 {
    font-size: 15px;
  }
}
.banner-sub-page ul li {
  margin: 0 10px;
  color: #fff;
  font-size: 14px;
}
@media (max-width: 539px) {
  .banner-sub-page ul li {
    margin: 0 3px;
    font-size: 12px;
  }
}
.banner-sub-page ul li.active {
  color: #c1a265;
}

.allServices {
  padding: 40px 0;
}
@media (max-width: 539px) {
  .allServices {
    padding: 20px 0;
  }
}
.allServices .row {
  row-gap: 25px;
}
@media (max-width: 1023px) {
  .allServices .row {
    row-gap: 20px;
  }
}
.allServices .row .col-lg-3 .orPagList {
  display: block;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  margin-bottom: 20px;
}
.allServices .row .col-lg-3 .orPagList .orPagList__item .orPagList__btn {
  width: 100%;
  text-align: inherit;
  padding: 13px 18px;
  font-size: 14px;
  color: #000;
  border-radius: 0;
  font-weight: 600;
}
.allServices .row .col-lg-3 .orPagList .orPagList__item .orPagList__btn:hover {
  background: #f5f5f5;
  color: #0247af;
}
.allServices .row .col-lg-3 .orPagList .orPagList__item .orPagList__btn.active {
  color: #000;
  background: #d8b347;
}
.allServices .row .col-lg-3 .serlink {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px #f7f7f7;
  margin-bottom: 15px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 600;
}
.allServices .row .col-lg-3 .serlink:hover {
  color: #c1a265;
}
.allServices .row .col-lg-9 .sercrd {
  border-radius: 4px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.03);
}
@media (max-width: 1023px) {
  .allServices .row .col-lg-9 .sercrd {
    margin: 0px;
  }
}
.allServices .row .col-lg-9 .sercrd .sercrdImgHol {
  height: 330px;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
}
@media (max-width: 1399px) {
  .allServices .row .col-lg-9 .sercrd .sercrdImgHol {
    height: 280px;
  }
}
@media (max-width: 1023px) {
  .allServices .row .col-lg-9 .sercrd .sercrdImgHol {
    height: 250px;
  }
}
.allServices .row .col-lg-9 .sercrd .sercrdImgHol .sercrd__img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 4px 4px 0 0;
  transition: all 0.5s ease-in-out;
}
.allServices .row .col-lg-9 .sercrd .sercrdImgHol:hover .sercrd__img {
  transform: rotate(15deg) scale(1.5);
  transition: all 0.5s ease-in-out;
}
.allServices .row .col-lg-9 .sercrd .sercrdBody {
  padding: 20px 25px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
}
@media (max-width: 1399px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody {
    padding: 15px 20px;
  }
}
@media (max-width: 1023px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody {
    padding: 15px 15px;
  }
}
.allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link {
  display: block;
  font-weight: 700;
  color: #000;
  font-size: 17px;
  margin-bottom: 5px;
}
.allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link:hover {
  color: #d5b159;
}
@media (max-width: 1399px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link {
    font-size: 17px;
  }
}
@media (max-width: 1199px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link {
    font-size: 15px;
    margin-bottom: 5px;
  }
}
@media (max-width: 1023px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link {
    font-size: 14px;
    margin-bottom: 3px;
  }
}
@media (max-width: 539px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__link {
    margin-bottom: 5px;
  }
}
.allServices .row .col-lg-9 .sercrd .sercrdBody p {
  margin: 5px 0 20px 0;
  font-size: 16px;
  color: #000;
  line-height: 1.7;
}
@media (max-width: 1399px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody p {
    font-size: 14px;
  }
}
@media (max-width: 1023px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody p {
    font-size: 13px;
  }
}
@media (max-width: 539px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody p {
    margin: 5px 0 10px 0;
  }
}
.allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__btn {
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 25px;
  border: 2px solid #d5b159;
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 700;
  background: #fff;
  color: #000;
  transition: all 0.4s ease-in-out;
}
.allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__btn:hover {
  background-color: #d8b347;
  transition: all 0.4s ease-in-out;
  color: #fff;
}
@media (max-width: 1399px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__btn {
    padding: 7px 25px;
    font-size: 16px;
  }
}
@media (max-width: 1199px) {
  .allServices .row .col-lg-9 .sercrd .sercrdBody .sercrdBody__btn {
    padding: 6px 20px;
    font-size: 13px;
  }
}

.propage {
  padding: 45px 0;
}
@media (max-width: 1399px) {
  .propage {
    padding: 35px 0;
  }
}
@media (max-width: 1023px) {
  .propage {
    padding: 20px 0;
  }
}
.propage .propageList {
  justify-content: center;
  -moz-column-gap: 35px;
       column-gap: 35px;
  margin-bottom: 40px;
}
@media (max-width: 1399px) {
  .propage .propageList {
    margin-bottom: 30px;
  }
}
@media (max-width: 1199px) {
  .propage .propageList {
    -moz-column-gap: 30px;
         column-gap: 30px;
    flex-wrap: wrap;
    row-gap: 10px;
  }
}
@media (max-width: 1023px) {
  .propage .propageList {
    margin-bottom: 20px;
  }
}
@media (max-width: 539px) {
  .propage .propageList {
    -moz-column-gap: 15px;
         column-gap: 15px;
  }
}
.propage .propageList .propageList__item .propageList__btn {
  cursor: pointer;
  color: #191b1f;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.4s ease-in-out;
}
.propage .propageList .propageList__item .propageList__btn.active, .propage .propageList .propageList__item .propageList__btn:hover {
  color: #c1a265;
}
@media (max-width: 1023px) {
  .propage .propageList .propageList__item .propageList__btn {
    font-size: 13px;
  }
}
@media (max-width: 539px) {
  .propage .propageList .propageList__item .propageList__btn {
    -moz-column-gap: 12px;
         column-gap: 12px;
  }
}
.propage .tab-content .tab-pane .row {
  row-gap: 25px;
}
.propage .tab-content .tab-pane .row .prgpgimgHol {
  height: 450px;
}
@media (max-width: 1599px) {
  .propage .tab-content .tab-pane .row .prgpgimgHol {
    height: 400px;
  }
}
@media (max-width: 1399px) {
  .propage .tab-content .tab-pane .row .prgpgimgHol {
    height: 360px;
  }
}
@media (max-width: 1199px) {
  .propage .tab-content .tab-pane .row .prgpgimgHol {
    height: 300px;
  }
}
.propage .tab-content .tab-pane .row .prgpgimgHol img {
  width: 100%;
  height: 100%;
}
.propage .tab-content .tab-pane .row .prgpgimgHol .prgpgimgHolVideo {
  width: 100%;
  height: 100%;
}/*# sourceMappingURL=projects.css.map */
</style>