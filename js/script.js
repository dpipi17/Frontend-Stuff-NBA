// var slideshows = document.querySelectorAll('[data-component="slideshow"]');
// slideshows.forEach(initSlideShow);

// function initSlideShow(slideshow) {

//     var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

//     var index = 0,
//         time = 5000;
//     slides[index].classList.add('active');

//     setInterval(() => {
//         slides[index].classList.remove('active');

//         index++;
//         if (index === slides.length) {
//             index = 0;
//         }
//         slides[index].classList.add('active');

//     }, time);
// }

const breakPoint = window.matchMedia("screen and (max-width: 850px)");

function handle_resize(breakPoint) {
    var burger_menu_nav = document.querySelector('.header');
    var navigation = document.querySelector('.navigation');
    var header_left_part = document.querySelector('.header_left_part');

    if (breakPoint.matches) {
        header_left_part.removeChild(navigation);
        burger_menu_nav.appendChild(navigation);
    } else {
        burger_menu_nav.removeChild(navigation);
        header_left_part.appendChild(navigation);
    }
}

breakPoint.addListener(handle_resize)
handle_resize(breakPoint)