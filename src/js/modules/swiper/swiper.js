import {Swiper, Thumbs, EffectCreative} from "swiper";

const swipers = () => {
  const elementsSliderMain = document.querySelectorAll('.sc-details__swiper--main');
  const elementsSliderPag = document.querySelectorAll('.sc-details__swiper--pagination');

  /* Слайдеры */
  let swiperPagination = new Swiper('.sc-home__swiper--pagination', {
    modules: [Thumbs],
    slidesPerView: 5, 
    spaceBetween: 10, 
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }
  });  

  let swiperMain = new Swiper('.sc-home__swiper--main', {
    modules: [Thumbs, EffectCreative],
    slidesPerView: 1, 
    spaceBetween: 10,
    thumbs: {
      swiper: swiperPagination,
    },    
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },    
  });  

  const configPagPlane = {
    modules: [Thumbs],
    slidesPerView: 4, 
    spaceBetween: 20, 
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    }
  };

  const configMainPlane = (swPag) => ({
    modules: [Thumbs, EffectCreative],
    slidesPerView: 1, 
    spaceBetween: 10,
    thumbs: {
      swiper: swPag,
    },    
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },    
  });


  const slidersPagPlane = [];
  const slidersMainPlane = [];
  if(elementsSliderMain.length === elementsSliderPag.length) {
    for(let i = 0; i < elementsSliderMain.length; i++) {
      slidersPagPlane[i] = new Swiper(elementsSliderPag[i], configPagPlane);  

      slidersMainPlane[i] = new Swiper(elementsSliderMain[i], configMainPlane(slidersPagPlane[i]));
    }
  }   
}

export default swipers;