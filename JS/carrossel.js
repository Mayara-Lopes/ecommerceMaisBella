const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    autoplay: {
        delay: 3000,
    }
});