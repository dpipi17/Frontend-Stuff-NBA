import SlideShow from './slideshow.js'
import Articles from './articles.js'

export default class HomePage {

    static loadData(callback) {
        fetch("data/articles.json")
            .then(response => response.json())
            .then((json) => {
                callback(json.articles);
            })
    }

    static render(callback) {
        this.loadData((articles) => {
            var content = `
                <div>
                    ${SlideShow.render()}
                    ${Articles.render(articles)}
                </div>
            `;
            callback(content);
            this.slideShow();
        });
    }

    static slideShow() {
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