import SlideShow from './slideshow.js'
import Articles from './articles.js'

export default class HomePage {

    static loadData(callback) {
        var articles = fetch("data/articles.json")
            .then(response => response.json());
        var news = fetch("data/news.json")
            .then(response => response.json());

        Promise.all([articles, news]).then((values) => {
            callback(values[0].articles, values[1]);
        });
    }

    static render(callback) {
        this.loadData((articles, news) => {
            var content = `
                <div>
                    ${SlideShow.render(news)}
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