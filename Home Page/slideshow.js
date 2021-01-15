import slide from './Custom Elements/slide.js'

export default class SlideShow {
    static renderOneNews(single) {
        return `
            <my-slide imageSrc="${single.imageSrc}" 
                title="${single.title}"
                text="${single.text}">

            </my-slide>
        `;
    }


    static render(news) {
        return `
            <div id="slideshow" data-component="slideshow">
                <div role="list">
                    ${news.map(x => this.renderOneNews(x)).join(' ')}
                </div>
            </div>
        `;
    }
}