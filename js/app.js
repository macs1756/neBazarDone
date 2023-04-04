



//tabs


	let tab = document.querySelectorAll('.header-tab'),
		 h = document.querySelector('.h'),
		 tabContent = document.querySelectorAll('.tabcontent');

	function hideTabContent(a) {
		 for (let i = a; i < tabContent.length; i++) {
			  tabContent[i].classList.remove('show');
			  tabContent[i].classList.add('hide');
		 }
	}

	hideTabContent(1);

	function showTabContent(b) {
		 if (tabContent[b].classList.contains('hide')) {
			  tabContent[b].classList.remove('hide');
			  tabContent[b].classList.add('show');
		 }
	}

	h.addEventListener('click', function(event) {
		 let target = event.target;
		 if (target && target.classList.contains('header-tab')) {
			  for(let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						 hideTabContent(0);
						 showTabContent(i);
						 break;
					}
			  }
		 }

	});

	const TAB_BUTTONS = document.querySelectorAll('.header-tab');


	TAB_BUTTONS.forEach((el)=>{
		el.addEventListener('click', function(e){

			TAB_BUTTONS.forEach((item)=>{
				item.classList.remove('active');
			});

			el.classList.add('active');
		});
	});

	const swiper = new Swiper('.swiper', {
		loop: true,
		navigation: {
		  nextEl: '.slider__navigation-next',
		  prevEl: '.slider__navigation-prev',
		},
	
		

		pagination: {
			el: '.swiper__navigation-pagination',
			clickable: true
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			700:{
				spaceBetween: 20,
				slidesPerView: 2,
			},
			992: {
				spaceBetween: 40,
				slidesPerView: 2,
			}
		}
	 
		
	 });
	 

	 const swiperBlog = new Swiper('.blog__slider', {
		loop: true,
		navigation: {
		  nextEl: '.blog__navigation-next',
		  prevEl: '.blog__navigation-prev',
		},
	
		

		pagination: {
			el: '.blog__navigation-pagination',
			clickable: true
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			700:{
				spaceBetween: 20,
				slidesPerView: 2,
			},
			992: {
				spaceBetween: 40,
				slidesPerView: 2,
			}
		}	
	 });


	 