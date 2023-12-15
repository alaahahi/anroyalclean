<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
    <MainLayout>
      <section class="banner-sub-page"  v-scroll-reveal-fade-up="{delay:'10'}" >
		<div class="container">
			<div class="banner-sub-page-wrpr flex-i justify-between">
				<h2 class="banner-sub-page-h2">Our Services</h2>
				<ul class="flex-i">
					<li> Home</li>
					<li>
						<i class="fas fa-chevron-right"></i>
					</li>
					<li class="active">Our Services</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="allServices">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<ul class="orPagList"  role="tablist"  v-scroll-reveal-fade-up="{delay:'50'}" >
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn active" data-bs-toggle="pill" data-bs-target="#a1" type="button" role="tab" aria-selected="true">
								Services
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a2" type="button" role="tab" aria-selected="false">
								Carpet Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a3" type="button" role="tab" aria-selected="false">
								Sofa Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a4" type="button" role="tab" aria-selected="false">
								Ceramic Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a5" type="button" role="tab" aria-selected="false">
								Bed Mattress Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a6" type="button" role="tab" aria-selected="false">
								Moket Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a7" type="button" role="tab" aria-selected="false">
								Car Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a8" type="button" role="tab" aria-selected="false">
								Chairs Dry Cleaning
							</div>
						</li>
						<li class="orPagList__item" role="presentation">
							<div class="orPagList__btn" data-bs-toggle="pill" data-bs-target="#a9" type="button" role="tab" aria-selected="false">
								Sterilization and disinfection services
							</div>
						</li>
					</ul>
					<a href="#" class="serlink" target="_blank"  v-scroll-reveal-fade-up="{delay:'150'}" >Company Brochure</a>
					<a href="#" class="serlink" target="_blank"  v-scroll-reveal-fade-up="{delay:'250'}" >Company Profile</a>
				</div>
				<div class="col-lg-9">
					<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="a1" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/1.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Carpet Dry Cleaning </a>
											<p>
												The first Royal Clean Master device in the Middle East and in UAE can wash carpets of all kinds without leaving any unpleasant traces or smells in the carpets with a guarantee of returning it as new .
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'150'}" > 
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/2.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Sofa Dry Cleaning </a>
											<p>
												The pulling force in the device used in Royal Clean Master removes stains and accumulated dirt from the depths, making it return as new.
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'250'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/3.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Ceramic Dry Cleaning </a>
											<p>
												We renew the luster and shining of kitchen floors while removing all stuck dirt.
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"   v-scroll-reveal-fade-up="{delay:'350'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/4.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Bed Mattress Dry Cleaning </a>
											<p>
												We provide a cleaning, sterilization and stain removal service for mattresses of all sizes
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/5.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Moket Dry Cleaning </a>
											<p>
												There is no need to remove the moket or replace it if it is dirty ,the device in Royal Clean Master washes from the roots and at the same time pulls the dirt and cleaning materials from the depth without leaving any traces or stains that may dry out later, forming unpleasant smells in the moket carpet.
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'150'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/6.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Car Dry Cleaning </a>
											<p>
												The dry cleaning system in the Royal Clean Master device works to wash the car from the inside and remove stains from the interior seat fabrics and remove all dirt from them without leaving any traces, stains or unpleasant smells.
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'250'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/7.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Chairs Dry Cleaning </a>
											<p>
												There is no need anymore to hide the stains and dirt in the fabrics of the dining table chairs, we can re-clean and renew it for you without damaging the fabrics.
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-6"  v-scroll-reveal-fade-up="{delay:'350'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/8.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Sterilization and disinfection services </a>
											<p>
												Sterilization and disinfection of homes, offices, companies and hotels also cars with the finest sterilization materials that kill microbes and viruses approved by the municipality.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a2" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/1.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Carpet Dry Cleaning </a>
											<p>
												The first Royal Clean Master device in the Middle East and in UAE can wash carpets of all kinds without leaving any unpleasant traces or smells in the carpets with a guarantee of returning it as new .
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a3" role="tabpanel" tabindex="0">
							<div class="row"  v-scroll-reveal-fade-up="{delay:'50'}" >
								<div class="col-md-12">
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/2.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Sofa Dry Cleaning </a>
											<p>
												The pulling force in the device used in Royal Clean Master removes stains and accumulated dirt from the depths, making it return as new.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a4" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/3.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Ceramic Dry Cleaning </a>
											<p>
												We renew the luster and shining of kitchen floors while removing all stuck dirt.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a5" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/4.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Bed Mattress Dry Cleaning </a>
											<p>
												We provide a cleaning, sterilization and stain removal service for mattresses of all sizes
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a6" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/5.jpg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Moket Dry Cleaning </a>
											<p>
												There is no need to remove the moket or replace it if it is dirty ,the device in Royal Clean Master washes from the roots and at the same time pulls the dirt and cleaning materials from the depth without leaving any traces or stains that may dry out later, forming unpleasant smells in the moket carpet.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a7" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/6.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Car Dry Cleaning </a>
											<p>
												The dry cleaning system in the Royal Clean Master device works to wash the car from the inside and remove stains from the interior seat fabrics and remove all dirt from them without leaving any traces, stains or unpleasant smells.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a8" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/7.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Chairs Dry Cleaning </a>
											<p>
												There is no need anymore to hide the stains and dirt in the fabrics of the dining table chairs, we can re-clean and renew it for you without damaging the fabrics.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="a9" role="tabpanel" tabindex="0">
							<div class="row">
								<div class="col-md-12"  v-scroll-reveal-fade-up="{delay:'50'}" >
									<div class="sercrd">
										<div class="sercrdImgHol flex-a">
											<img src="assets/images/services/8.jpeg" alt="" class="sercrd__img">
										</div>
										<div class="sercrdBody">
											<a href="#" class="sercrdBody__link"> Sterilization and disinfection services </a>
											<p>
												Sterilization and disinfection of homes, offices, companies and hotels also cars with the finest sterilization materials that kill microbes and viruses approved by the municipality.
											</p>
										</div>
									</div>
								</div>
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
}/*# sourceMappingURL=services.css.map */
</style>