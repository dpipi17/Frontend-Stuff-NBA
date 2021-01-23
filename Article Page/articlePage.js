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
                    <img src="${article.imageSrc}"></img>
                    <h1>${article.title}</h1>
                    <p>${article.text}</p>
                </div>
            `;

            callback(content);

        }, articleId);
    }
}