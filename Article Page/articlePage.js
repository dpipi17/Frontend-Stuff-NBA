export default class ArticlePage {

    static loadData(callback, articleId) {
        fetch(`data/articles/${articleId}.json`)
            .then(response => response.json())
            .then((json) => {
                callback(json);
            });
    }

    static render(callback, articleId) {
        this.loadData((article) => {
            let content = `
                <div class="articlePageContainer">
                    <h1>${article.title}</h1>
                    <img src="${article.imageSrc}"></img>
                    ${article.texts.map(paragraph => "<p>" + paragraph + "</p>").join(' ')}
                </div>
            `;

            callback(content);

        }, articleId);
    }
}