<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
    <MainLayout>
      <section class="banner-sub-page" v-scroll-reveal-fade-up="{delay:'70'}" >
		<div class="container">
			<div class="banner-sub-page-wrpr flex-i justify-between">
				<h2 class="banner-sub-page-h2">Contact Us</h2>
				<ul class="flex-i">
					<li> Home</li>
					<li>
						<i class="fas fa-chevron-right"></i>
					</li>
					<li class="active">Contact Us</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="contatct">
		<div class="container">
			<div class="row">
				<div class="col-lg-8" v-scroll-reveal-zoom-in="{delay:'170'}">
					<div class="contatctBox">
						<div class="contatctBox__row">
							<label class="contatctBox__label">Name</label>
							<input type="text" placeholder="Name" class="form-control contatctBox__input">
						</div>
						<div class="contatctBox__row">
							<label class="contatctBox__label">Email</label>
							<input type="email" placeholder="Email" class="form-control contatctBox__input">
						</div>
						<div class="contatctBox__row">
							<label class="contatctBox__label">Phone</label>
							<input type="Phone" placeholder="Phone" class="form-control contatctBox__input">
						</div>
						<div class="contatctBox__row">
							<label class="contatctBox__label">Message</label>
							<textarea placeholder="Message" class="form-control contatctBox__textarea"></textarea>
						</div>
						<button type="submit" class="contactform-btn">Send</button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="conbox" v-scroll-reveal-fade-up="{delay:'150'}" >
						<div class="conboxRow">
							<i class="fa-solid fa-briefcase"></i>
							<span class="conboxRow__link">Royal Clean Master</span>
						</div>
						<div class="conboxRow">
							<i class="fa-solid fa-phone"></i>
							<a href="tel:+971565822000" class="conboxRow__link">+971565822000</a>
						</div>
						<div class="conboxRow">
							<i class="fa-solid fa-envelope"></i>
							<a href="mailto:info@royalclean.ae" class="conboxRow__link"> info@royalclean.ae </a>
						</div>
						<div class="conboxRow">
							<i class="fa-solid fa-location-dot"></i>
							<a href="#" class="conboxRow__link"> 
								Abu Dhabi, Bin Ghanim tower , behind Al Masref bank, at intersection of Hamdan Street, with Al Salam street
							</a>
						</div>
					</div>
					<div class="conbox" v-scroll-reveal-fade-up="{delay:'250'}" >
						<h3 class="conbox__hdng">Businesss Hours</h3>
						<div class="conboxRow">
							<i class="fa-solid fa-clock"></i>
							<span class="conboxRow__link"> Opening Hour: 9:00 am - 9:00 pm </span>
						</div>
					</div>
					<div class="conbox"  v-scroll-reveal-fade-up="{delay:'350'}" >
						<div class="conboxRow">
							<i class="fa-brands fa-facebook-f"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
						</div>
						<div class="conboxRow">
							<i class="fa-brands fa-snapchat"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
						</div>
						<div class="conboxRow">
							<i class="fa-brands fa-instagram"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
						</div>
						<div class="conboxRow">
							<i class="fa-brands fa-tiktok"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
						</div>
						<div class="conboxRow">
							<i class="fa-brands fa-twitter"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
						</div>
						<div class="conboxRow">
							<i class="fa-brands fa-linkedin"></i>
							<a href="#" class="conboxRow__link"> Royal Clean Master </a>
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

.contatct {
  padding: 40px 0 50px 0;
}
@media (max-width: 1023px) {
  .contatct {
    padding: 25px 0 20px 0;
  }
}
@media (max-width: 539px) {
  .contatct {
    padding: 20px 0 15px 0;
  }
}
@media (max-width: 1023px) {
  .contatct .row {
    row-gap: 30px;
  }
}
.contatct .contatctBox {
  padding: 30px 30px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}
@media (max-width: 539px) {
  .contatct .contatctBox {
    padding: 18px 18px;
  }
}
.contatct .contatctBox .contatctBox__row {
  margin-bottom: 20px;
}
.contatct .contatctBox .contatctBox__row .contatctBox__label {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-bottom: 7px;
}
@media (max-width: 539px) {
  .contatct .contatctBox .contatctBox__row .contatctBox__label {
    font-size: 13px;
    margin-bottom: 5px;
  }
}
.contatct .contatctBox .contatctBox__row .contatctBox__input {
  border-radius: 4px;
  font-size: 13px;
  height: 42px;
}
.contatct .contatctBox .contatctBox__row .contatctBox__input:focus {
  border-color: #c1a265;
  box-shadow: 0 0 0 0.25rem rgba(193, 162, 101, 0.25);
}
.contatct .contatctBox .contatctBox__row .contatctBox__textarea {
  height: 170px;
  font-size: 13px;
  border-radius: 4px;
}
.contatct .contatctBox .contatctBox__row .contatctBox__textarea:focus {
  border-color: rgb(193, 162, 101);
  box-shadow: 0 0 0 0.25rem rgba(193, 162, 101, 0.25);
}
.contatct .contatctBox .contactform-btn {
  padding: 10px 70px;
  background-color: #d8b347;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
.contatct .contatctBox .contactform-btn:hover {
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.contatct .conbox {
  padding: 35px 34px;
  border-radius: 4px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 30px;
}
@media (max-width: 1199px) {
  .contatct .conbox {
    padding: 25px 20px;
    margin-bottom: 20px;
  }
}
@media (max-width: 1023px) {
  .contatct .conbox {
    margin-bottom: 15px;
  }
}
.contatct .conbox .conboxRow {
  display: flex;
  align-items: flex-start;
  -moz-column-gap: 10px;
       column-gap: 10px;
  margin-bottom: 15px;
}
.contatct .conbox .conboxRow:nth-last-child(1) {
  margin-bottom: 0;
}
.contatct .conbox .conboxRow i {
  font-size: 15px;
  width: 15px;
  transform: translateY(3px);
  color: #d8b347;
}
.contatct .conbox .conboxRow .conboxRow__link {
  width: calc(100% - 15px);
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
}
.contatct .conbox .conboxRow .conboxRow__link:hover {
  color: #d8b347;
  transition: all 0.3s ease-in-out;
}
@media (max-width: 1199px) {
  .contatct .conbox .conboxRow .conboxRow__link {
    font-size: 13px;
  }
}
.contatct .conbox .conbox__hdng {
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}
@media (max-width: 1199px) {
  .contatct .conbox .conbox__hdng {
    font-size: 18px;
    margin-bottom: 15px;
  }
}/*# sourceMappingURL=contact.css.map */
</style>