export default class Slide extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('title');
        let text = this.getAttribute('text');
        let imgSrc = this.getAttribute('imageSrc');
        this.innerHTML = `
            <div class="slide">
                <img src=${imgSrc} alt="">
                <div class="text_container">
                    <h2>${title}</h2>
                    <p>${text}</p>
                <div>
            </div>
        `;
    }
}

customElements.define('my-slide', Slide);