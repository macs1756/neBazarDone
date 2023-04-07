const WORK_TABS = document.querySelectorAll(".work-tab");

WORK_TABS.forEach((tab) => {
  tab.addEventListener("click", () => {
    WORK_TABS.forEach((el) => {
      el.classList.remove("active");
    });

    tab.classList.add("active");
  });
});

const WORK_DROPS = document.querySelectorAll(".work-drop");

WORK_DROPS.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("active");
    drop.parentElement.classList.toggle("active");

    WORK_DROPS.forEach((el) => {
      if (drop !== el) {
        el.nextElementSibling.classList.remove("active");
        el.parentElement.classList.remove("active");
      }
    });
  });
});

const CURRENT_CATEGORY_ITEM = document.querySelectorAll(
  ".current-category__body li"
);
const CURRENT_CITY_ITEM = document.querySelectorAll(".current-city__body li");

CURRENT_CATEGORY_ITEM.forEach((value) => {
  value.addEventListener("click", () => {
    value.parentElement.classList.remove("active");
    value.parentElement.parentElement.classList.remove("active");
    value.parentElement.previousElementSibling.querySelector("p").innerText =
      value.innerText;
  });
});

CURRENT_CITY_ITEM.forEach((value) => {
  value.addEventListener("click", () => {
    value.parentElement.classList.remove("active");
    value.parentElement.parentElement.classList.remove("active");
    value.parentElement.previousElementSibling.querySelector("p").innerText =
      value.innerText;
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

const COUNT_FILTERS = document.querySelectorAll(".filters__count-net button");

COUNT_FILTERS.forEach((el) => {
  el.addEventListener("click", () => {
    COUNT_FILTERS.forEach((btn) => {
      btn.classList.remove("active");
    });

    el.classList.add("active");
  });
});

let progress = document.querySelector(".progress");

let graphActivePart = document.querySelector(".price__graph-bg");
let graphActivePart2 = document.querySelector(".price__graph-bg2");

if (document.querySelector(".range-min")) {
  document.querySelector(".range-min").addEventListener("input", () => {
    if (100 - parseInt(progress.style.left) - 1.61 > 98) {
      graphActivePart.style.right = "100%";
    } else {
      graphActivePart.style.right =
        100 - parseInt(progress.style.left) - 1.51 + "%";
    }
  });

  document.querySelector(".range-max").addEventListener("input", () => {
    if (100 - parseInt(progress.style.right) - 1.61 > 98) {
      graphActivePart2.style.left = "100%";
    } else {
      graphActivePart2.style.left =
        100 - parseInt(progress.style.right) - 1.51 + "%";
    }
  });

  const ALL_BUTTONS_ACTIVE_FILTERS =
    document.querySelectorAll(".active-filters");

  const FILTERS_MODAL = document.querySelector(".filters__wr");
  const FILTERS_CLOSE = document.querySelector(".filters__close");

  const ARR_CLOSE_FILTERS = [FILTERS_MODAL, FILTERS_CLOSE];

  const FILTERS_BODY_MODAL = document.querySelector(".filters__body");

  ALL_BUTTONS_ACTIVE_FILTERS.forEach((btn) => {
    btn.addEventListener("click", () => {
      FILTERS_MODAL.classList.add("active");
      document.body.classList.toggle("scrollNone");
    });
  });

  ARR_CLOSE_FILTERS.forEach((el) => {
    el.addEventListener("click", () => {
      FILTERS_MODAL.classList.remove("active");
      document.body.classList.toggle("scrollNone");
    });
  });

  FILTERS_BODY_MODAL.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

if (document.querySelector(".form")) {
  //code for page form
  let reg = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;
  const BUTTON_SEND_FORM = document.querySelector("#send-form");
  const INPUT_FOR_VALIDITY_LENGTH_3 = document.querySelectorAll(".validation-3");

  const INPUT_TELL = document.querySelector("#p-tell");

  const INPUT_EMAIL = document.querySelector("#p-email");

  const CURRENT_VACANCY = document.querySelector('#current-vacancy');

  const CURRENT_LOCATION = document.querySelector('#current-location');

  const CURRENT_PERIOD = document.querySelector('#current-period');

  const FORM_FILE = document.querySelector('#p-file');

  function addTextInFormFileName(){
    document.querySelector('#file-name').innerText = FORM_FILE.value.split(/\s*\\s*/)[2];
  }
  
  FORM_FILE.addEventListener('input', ()=>{
    addTextInFormFileName();
  });



  BUTTON_SEND_FORM.addEventListener("click", () => {


    INPUT_FOR_VALIDITY_LENGTH_3.forEach((el) => {
      if (el.value.length >= 3) {
        el.style.border = "1px solid transparent";
      } else {
        el.style.border = "1px solid red";
      }
    });

    if (INPUT_TELL.value.length >= 10) {
      INPUT_TELL.style.border = "1px solid transparent";
    } else {
      INPUT_TELL.style.border = "1px solid red";
    }

    if(reg.test(INPUT_EMAIL.value)){
      INPUT_EMAIL.style.border = "1px solid transparent";
    }else{
      INPUT_EMAIL.style.border = "1px solid red";
    }

    if(CURRENT_VACANCY.innerText === 'Все вакансии' || CURRENT_VACANCY.innerText === 'Всі ваканції'){
      CURRENT_VACANCY.parentElement.style.border = "1px solid red";
    }else{
      CURRENT_VACANCY.parentElement.style.border = "1px solid transparent";
    }


    if(CURRENT_LOCATION.innerText === 'Все города сша' || CURRENT_LOCATION.innerText === 'Всі міста сша'){
      CURRENT_LOCATION.parentElement.style.border = "1px solid red";
    }else{
      CURRENT_LOCATION.parentElement.style.border = "1px solid transparent";
    }


    if(CURRENT_PERIOD.innerText === 'Период' || CURRENT_PERIOD.innerText === 'Період'){
      CURRENT_PERIOD.parentElement.style.border = "1px solid red";
    }else{
      CURRENT_PERIOD.parentElement.style.border = "1px solid transparent";
    }

    if(FORM_FILE.value === ''){
      FORM_FILE.parentElement.style.border = "1px solid red";
    }else{
      FORM_FILE.parentElement.style.border = "1px solid tranparent";
    }
  });
}
