
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

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 20;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";

		  

      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }


	

    }
  });

  

});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});



const COUNT_FILTERS = document.querySelectorAll('.filters__count-net button');

COUNT_FILTERS.forEach((el)=>{

  el.addEventListener('click', ()=>{

    COUNT_FILTERS.forEach((btn)=>{
      btn.classList.remove('active');
    });

    el.classList.add('active');
  });
})



let progress = document.querySelector('.progress');

let graphActivePart = document.querySelector('.price__graph-bg');
let graphActivePart2 = document.querySelector('.price__graph-bg2');

document.querySelector('.range-min').addEventListener('input', ()=>{

  if(100 - parseInt(progress.style.left) - 1.61 > 98){
    graphActivePart.style.right = '100%';
  }else{
    graphActivePart.style.right = 100 - parseInt(progress.style.left) - 1.61 +'%';
  }

});



document.querySelector('.range-max').addEventListener('input', ()=>{

  if(100 - parseInt(progress.style.right) - 1.61 > 98){
    graphActivePart2.style.left = '100%';
  }else{
    graphActivePart2.style.left = 100 - parseInt(progress.style.right) - 1.61 +'%';
  }
});


const ALL_BUTTONS_ACTIVE_FILTERS =  document.querySelectorAll('.active-filters');

const FILTERS_MODAL = document.querySelector('.filters__wr');
const FILTERS_CLOSE = document.querySelector('.filters__close');

const ARR_CLOSE_FILTERS = [FILTERS_MODAL, FILTERS_CLOSE];

const FILTERS_BODY_MODAL = document.querySelector('.filters__body');

ALL_BUTTONS_ACTIVE_FILTERS.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    FILTERS_MODAL.classList.add('active');
    document.body.classList.toggle('scrollNone');
  })
})

ARR_CLOSE_FILTERS.forEach((el)=>{
  el.addEventListener('click', ()=>{
    FILTERS_MODAL.classList.remove('active');
    document.body.classList.toggle('scrollNone');
  });
});



FILTERS_BODY_MODAL.addEventListener('click', function(e){
    e.stopPropagation();
});

