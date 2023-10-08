import 'normalize.css';
import './style.scss';
import Navigo from 'navigo';

const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css')
  ]).then(([{Navigation, Thumbs}, Swiper]) => {
    const swiperThumbnails = new Swiper.default('.product__slider-thubnails', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    })
    
    new Swiper.default('.product__slider-main', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.product__arrow-next',
        prevEl: '.product__arrow-prev',
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  });
};



const init = () => {
  productSlider();

  const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

  router
  .on('/', () => {
    console.log('на главной ');
  })
  .on('/category', () => {
    console.log('category ');
  })
  .on('/favorites', () => {
    console.log('favorites');
  })
  .on('/search', () => {
    console.log('search');
  })
  .on('/product/:id', (obj) => {
    console.log('obj: ', obj);
  })
  .on('/cart', () => {
    console.log('cart ');
  })
  .on('/order', () => {
    console.log('order');
  })
  .notFound(() => {
    console.log('error ');
  })

  router.resolve();
};

init()

