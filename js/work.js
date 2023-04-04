
const WORK_TABS = document.querySelectorAll('.work-tab');

WORK_TABS.forEach((tab)=>{
	tab.addEventListener('click', ()=>{

		WORK_TABS.forEach((el)=>{
			el.classList.remove('active');
		});

		tab.classList.add('active');
	})
});

const WORK_DROPS = document.querySelectorAll('.work-drop');

WORK_DROPS.forEach((drop)=>{

	

	drop.addEventListener('click', ()=>{

		drop.nextElementSibling.classList.toggle('active');
		drop.parentElement.classList.toggle('active');


		WORK_DROPS.forEach((el)=>{
			if(drop !== el){
				el.nextElementSibling.classList.remove('active');
				el.parentElement.classList.remove('active');
			}
			
	});
	});
});

const CURRENT_CATEGORY_ITEM = document.querySelectorAll('.current-category__body li');
const CURRENT_CITY_ITEM = document.querySelectorAll('.current-city__body li');


CURRENT_CATEGORY_ITEM.forEach((value)=>{
	value.addEventListener('click', ()=>{
		value.parentElement.classList.remove('active');
		value.parentElement.parentElement.classList.remove('active');
		value.parentElement.previousElementSibling.querySelector('p').innerText = value.innerText;
	});
});

CURRENT_CITY_ITEM.forEach((value)=>{
	value.addEventListener('click', ()=>{
		value.parentElement.classList.remove('active');
		value.parentElement.parentElement.classList.remove('active');
		value.parentElement.previousElementSibling.querySelector('p').innerText = value.innerText;
	});
});