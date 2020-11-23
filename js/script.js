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
    var navigation = document.querySelector('.navigation');
    var burger_menu_nav = document.querySelector('.header');
    var header_left_part = document.querySelector('.header_left_part');

    navigation.parentNode.removeChild(navigation);
    if (breakPoint.matches) {
        burger_menu_nav.appendChild(navigation);
    } else {
        header_left_part.appendChild(navigation);
    }
}

breakPoint.addListener(handle_resize)
handle_resize(breakPoint)



let routes = {
    '*': () => {
        alert("Home")
    },
    '/Games': () => {
        alert("Games")
    },
    '/Standings': () => {
        alert("Standings")
    },
    '/Teams': () => {
        alert("Teams")
    },
    '/Stats': () => {
        alert("Stats")
    },
    '/Players': () => {
        alert("Players")
    },
    '/Fantasy': () => {
        alert("Fantasy")
    },

};

window.addEventListener("load", () => {
    var router = new Navigo(null, true, '#');
    router.on(routes).resolve();
})