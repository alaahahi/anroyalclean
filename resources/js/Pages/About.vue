<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import HomeClients from '@/Components/HomeClients.vue';

</script>
<template>
	<MainLayout>
    <section class="aboutBanner">
		<video src="assets/images/about-video.mp4" autoplay controls muted></video>
	</section>
	<section class="aboutusPage">
		<div class="container">
			<div class="aboutusPageBox"   v-scroll-reveal-fade-up="{delay:'50'}" >
				<h6 class="aboutusPageBox__h6">WELCOME TO ROYAL CLEAN MASTER</h6>
				<h2 class="aboutusPageBox__h2">Accuracy, speed, mastery, amazing result</h2>
			</div>
		</div>
	</section>
  <section class="aboutus">
		<div class="container">
			<div class="row">
				<div class="col-md-5" v-scroll-reveal-zoom-in="{delay:'150'}">
					<img src="assets/images/about.png" alt="" class="aboutus__img">
				</div>
				<div class="col-md-7"   v-scroll-reveal-fade-up="{delay:'150'}" >
					<h4>What sets us apart!</h4>
					<p>We use the latest and most powerful international modern devices, especially furniture cleaning materials of all kinds that are internationally approved, and are distinguished by being the first of their kind in the Middle East in the power of deep cleaning along with sterilization and aromatic scent, providing accurate, high quality and immediate cleaning results.</p>
					<h5>Features of cleaning devices</h5>
					<ul>
						<li>Cleaning Equipment Features: The most powerful type of cleaning equipment.</li>
						<li>Professional stain removal with great care.</li>
						<li>Adding a long lasting scent.</li>
						<li>Sterilization add strong quality.</li>
						<li>Clean more and dry faster. Unprecedented speed in the performance of work.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- about us end -->
  <HomeClients />

	<!-- clients end -->
	<section class="contact">
		<div class="container">
			<h1 class="contact__h1">Contact US</h1>
			<div class="row">
				<div class="col-lg-6"  v-scroll-reveal-fade-up="{delay:'50'}" >
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
				<div class="col-lg-6" v-scroll-reveal-zoom-in="{delay:'50'}">
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
	<!-- contact end -->
	<section class="map"  v-scroll-reveal-fade-up="{delay:'50'}" >
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29045.128855864074!2d54.368449!3d24.497889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e674cfedf9ecb%3A0x4b962449bcd2e098!2sAl%20Salam%20Tower!5e0!3m2!1sen!2sae!4v1660052522304!5m2!1sen!2sae"></iframe>
	</section>
	</MainLayout>
</template>
<style scoped>
.aboutBanner {
  text-align: center;
  background: url(../images/about-bg.jpg);
  height: 650px;
  overflow: hidden;
  background-repeat: repeat;
  background-size: contain;
  position: relative;
}
@media (max-width: 1599px) {
  .aboutBanner {
    height: 600px;
  }
}
@media (max-width: 1399px) {
  .aboutBanner {
    height: 550px;
  }
}
@media (max-width: 1199px) {
  .aboutBanner {
    height: 500px;
  }
}
@media (max-width: 1023px) {
  .aboutBanner {
    height: 400px;
  }
}
@media (max-width: 539px) {
  .aboutBanner {
    height: 360px;
  }
}
.aboutBanner video {
  width: 100%;
  height: 100%;
}

.clientsTop {
  background-color: #f9f3db;
  padding: 40px 0 1px 0;
  margin-bottom: 30px;
}
@media (max-width: 1199px) {
  .clientsTop {
    padding: 20px 0 1px 0;
    margin-bottom: 20px;
  }
}

.aboutusPageBox {
  margin-top: 40px;
  padding: 80px 15px;
  border-radius: 7px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.07);
  text-align: center;
}
@media (max-width: 1199px) {
  .aboutusPageBox {
    padding: 70px 15px;
  }
}
@media (max-width: 1023px) {
  .aboutusPageBox {
    padding: 60px 15px;
    margin-top: 30px;
  }
}
@media (max-width: 539px) {
  .aboutusPageBox {
    padding: 40px 10px;
    margin-top: 30px;
  }
}
.aboutusPageBox .aboutusPageBox__h6 {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  color: #d5b159;
  display: block;
  margin-bottom: 15px;
}
@media (max-width: 1023px) {
  .aboutusPageBox .aboutusPageBox__h6 {
    font-size: 15px;
    margin-bottom: 10px;
  }
}
@media (max-width: 767px) {
  .aboutusPageBox .aboutusPageBox__h6 {
    font-size: 15px;
    margin-bottom: 3px;
  }
}
@media (max-width: 539px) {
  .aboutusPageBox .aboutusPageBox__h6 {
    font-size: 14px;
  }
}
.aboutusPageBox .aboutusPageBox__h2 {
  font-weight: 700;
  font-size: 28px;
  color: #000;
  line-height: 1.7;
  max-width: 940px;
  margin: auto;
}
@media (max-width: 1199px) {
  .aboutusPageBox .aboutusPageBox__h2 {
    font-size: 24px;
  }
}
@media (max-width: 1023px) {
  .aboutusPageBox .aboutusPageBox__h2 {
    font-size: 22px;
  }
}
@media (max-width: 767px) {
  .aboutusPageBox .aboutusPageBox__h2 {
    font-size: 20px;
  }
}
@media (max-width: 767px) {
  .aboutusPageBox .aboutusPageBox__h2 {
    font-size: 18px;
  }
}/*# sourceMappingURL=about.css.map */
</style>