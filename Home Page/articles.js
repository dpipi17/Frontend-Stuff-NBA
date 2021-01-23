import Article from './Custom Elements/article.js'

export default class Articles {
    static renderArticle(article) {
        return `
            <my-article articleId="${article.articleId}"
                        imageSrc="${article.imageSrc}" 
                        title="${article.title}"
                        text="${article.text}"
                        date="${article.date}"></my-article>
        `;
    }

    static render(articles) {
        return `
            <div class="articles">
                ${articles.map(article => this.renderArticle(article)).join(' ')}
            </div>
        `;
    }
}