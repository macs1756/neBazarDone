const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});

btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});
const HEADER_DROP_DOWNS = document.querySelectorAll('.header__link-drop-down');

const HEADER_DROP_DOWNS_BODY = document.querySelectorAll('.header__drop-down-body');


HEADER_DROP_DOWNS.forEach((dropDown)=>{

	dropDown.addEventListener('mouseenter', function(e){
	
		
			dropDown.querySelector('.header__drop-down-body').classList.add('active');	
			dropDown.querySelector('img').classList.add('rotate');	
	});

	HEADER_DROP_DOWNS_BODY.forEach((el)=>{
		el.addEventListener('mouseenter', function(e){
			el.parentElement.classList.add('active');	
		
		});
	});

	dropDown.addEventListener('mouseleave', function(e){
	
		
		dropDown.querySelector('.header__drop-down-body').classList.remove('active');
		dropDown.querySelector('img').classList.remove('rotate');
	
});
});

const DROP_DOWN_ALL_LINKS = document.querySelectorAll('.header__drop-down-wr li');

DROP_DOWN_ALL_LINKS.forEach((el)=>{
	el.addEventListener('click', ()=>{
			el.parentElement.parentElement.classList.remove('active');
			
	});
});

const BURGER_AKARDEON = document.querySelectorAll('.burger__list-opened');


BURGER_AKARDEON.forEach((el)=>{
	el.addEventListener('click', ()=>{
		el.children[1].classList.toggle('active');
		el.querySelector('img').classList.toggle('rotate');
	});
});

const MODAL_BUTTON_OPEN = document.querySelectorAll('.modal-open');
	 const MODAL = document.querySelector('.modal__wr');
	 const MODAL_BUTTON_CLOSE = document.querySelector('.modal__close');
	 const MODAL_BODY = document.querySelector('.modal__body');

	 MODAL_BUTTON_OPEN.forEach((btn)=>{

		btn.addEventListener('click', ()=>{
			MODAL.classList.add('active');
			
		});
	 });
	 
	 const ARR_ClOSE_MODAL = [MODAL_BUTTON_CLOSE, MODAL];

	 ARR_ClOSE_MODAL.forEach((el)=>{
		el.addEventListener('click', ()=>{
			MODAL.classList.remove('active');
		 });
	 });

	
	 MODAL_BODY.addEventListener('click', function(e){
			if(!e.target.classList.contains('modal__net-item')){
				e.stopPropagation();
			}
	 });