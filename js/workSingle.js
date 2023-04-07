





const CONTACT_BUTTON = document.querySelector('.work-single__contact-tell');

const FAKE_TEXT_IN_BUTTON = document.querySelector('.work-single__contact-tell p');

CONTACT_BUTTON.addEventListener('click', ()=>{
	CONTACT_BUTTON.querySelector('span').innerText = FAKE_TEXT_IN_BUTTON.innerText;
});



const swiper = new Swiper('.work-single__swiper', {
	

	breakpoints: {
		0:{
			slidesPerView: 1,
			spaceBetween: 20,
		},

		700:{
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 40,
		}
	},
	navigation: {
		nextEl: '.blog__navigation-next',
		prevEl: '.blog__navigation-prev',
	 },
 
	 

	 pagination: {
		 el: '.blog__navigation-pagination',
		 clickable: true
	 },
 });
 
