// SLIDE
new Swiper('.slide1 .swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
new Swiper('.slide2 .swiper', {
  slidesPerView: 5,
  spaceBetween: 1,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  loopedSlides: 3,
});
new Swiper('.slide3 .swiper', {
  slidesPerView: 6,
  spaceBetween: 1,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  loopedSlides: 4,
});

// 순차적 애니메이션
const spyEls = document.querySelectorAll('.spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐의 여부 감시
    triggerHook: 0.8, // 바닥을 1로 기준하여 보였다는 기준이 될 위치
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 지도
const mapContent = document.querySelector('.map-content');
const countryEls = mapContent.querySelectorAll('.country');
const china = mapContent.querySelector('.country.china');
const america = mapContent.querySelector('.country.america');
const japan = mapContent.querySelector('.country.japan');
const australia = mapContent.querySelector('.country.australia');
const vietnam = mapContent.querySelector('.country.vietnam');
const canada = mapContent.querySelector('.country.canada');
const pinWrapEls = mapContent.querySelectorAll('.pin-wrap');
const descEls = mapContent.querySelectorAll('.desc-text');
const moneyEls = mapContent.querySelectorAll('.money-text');
const moneySpanEls = mapContent.querySelectorAll('.money-span');
const anchor = mapContent.querySelector('.anchor');

function pinChanger(country, textVlaue, anchorHeight) {
  countryEls.forEach((el) => {
    if (el.classList.contains(`${country}`)) {
      el.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains(`${country}`)) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains(`${country}`)) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains(`${country}`)) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains(`${textVlaue}`)) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = `${anchorHeight}`;
    } else {
      el.classList.remove('focus');
    }
  });
}

china.addEventListener('click', function () {
  pinChanger('china', 'money', '70px');
});
america.addEventListener('click', function () {
  pinChanger('america', 'money', '130px');
});
japan.addEventListener('click', function () {
  pinChanger('japan', 'money', '190px');
});
australia.addEventListener('click', function () {
  pinChanger('australia', 'money', '250px');
});
vietnam.addEventListener('click', function () {
  pinChanger('vietnam', 'company', '310px');
});
canada.addEventListener('click', function () {
  pinChanger('canada', 'company', '370px');
});

// 스크롤 요소
const toSlideEl = document.querySelector('#to-slide');
const toTopEl = document.querySelector('#to-top');
window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (scrollY < 200) {
      gsap.to(toTopEl, 0.6, {
        opacity: 0,
        display: 'none',
      }); // 숨기기
    } else {
      gsap.to(toTopEl, 0.6, {
        opacity: 1,
        display: 'block',
      }); //보이기
    }
  }, 300)
);
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
toSlideEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 900,
  });
});
