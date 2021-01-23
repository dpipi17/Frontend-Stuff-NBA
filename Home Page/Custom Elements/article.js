export default class Article extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('title');
        let text = this.getAttribute('text');
        let imgSrc = this.getAttribute('imageSrc');
        let date = this.getAttribute('date')
        this.innerHTML = `
            <div class='article'>
                <img src=${imgSrc} alt="">
                <div class="text_container">
                    <h3>${title}</h3>
                    <p>${text}</p>
                    <p>${date}</p>
                <div>
            </div>
        `;

        this.addEventListener('click', () => {
            window.location = `#/Article/${this.getAttribute('articleId')}`;
        })
    }
}

customElements.define('my-article', Article);