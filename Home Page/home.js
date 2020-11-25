export default class HomePage {
    static render(params) {
        return `
            <div id="slideshow" data-component="slideshow">
                <div role="list">
                    <div class="slide">
                        <img src="https://cdn.nba.com/manage/2020/11/klay-thompson.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="https://cdn.nba.com/manage/2020/11/anthony-edwards-draft-hat.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="https://cdn.nba.com/manage/2020/11/james-wiseman-draft.jpg" alt="">
                    </div>
                </div>
            </div>
        `
    }

    static after() {
        var slideshows = document.querySelectorAll('[data-component="slideshow"]');
        slideshows.forEach(initSlideShow);

        function initSlideShow(slideshow) {

            var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

            var index = 0,
                time = 5000;
            slides[index].classList.add('active');

            setInterval(() => {
                slides[index].classList.remove('active');

                index++;
                if (index === slides.length) {
                    index = 0;
                }
                slides[index].classList.add('active');

            }, time);
        }
    }
}