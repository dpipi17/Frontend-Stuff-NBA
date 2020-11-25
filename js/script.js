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