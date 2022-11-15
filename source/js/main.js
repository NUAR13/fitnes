import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
new Swiper('.trainers__swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  keyboard: {
    enabled: true,
  },

  slidesPerView: 4,
});

new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})

const input = document.querySelectorAll(".tel");
const submitFormButton = document.querySelector(".form-submit");

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

// ======================================

input.forEach((elem) => {
  elem.addEventListener("input", (e) => {
    const value = elem.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    if (elem.value.includes("+8") || elem.value[0] === "8") {
      result = "";
    } else {
      result = "+";
    }

  //
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ") ";
          break;
        case 7:
          result += "-";
          break;
        case 9:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
  //
    elem.value = result;
    if(elem.value.length < 18){
      submitFormButton.disabled = true;
    } else {
      submitFormButton.disabled = false;
    }
  });
});

var elemTextMobile = document.querySelector(".about-us__open-mobile");
var elemTextDesktop = document.querySelectorAll(".about-us__open-desktop");
var buttonOpen = document.querySelector(".about-us__button-mobile");

const textInvis = () => {
  elemTextDesktop.forEach ((element) =>{
    if(element.classList.contains('about-us__open-desktop')) {
      element.classList.remove('about-us__open-desktop')
      elemTextMobile.classList.add('about-us__mobile-invis')
      buttonOpen.innerHTML = "Свернуть";
  }
  else {
    element.classList.add('about-us__open-desktop')
    elemTextMobile.classList.remove('about-us__mobile-invis')
    buttonOpen.innerHTML = "Подробнее";
  }
  })
}

buttonOpen.addEventListener("click", textInvis);
