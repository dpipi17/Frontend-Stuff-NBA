export default class Team extends HTMLElement {
    connectedCallback() {
        let name = this.getAttribute('name');
        let imgSrc = this.getAttribute('imageSrc');
        let teamPageSrc = this.getAttribute('teamPage');
        this.innerHTML = `
            <a class="team" href="${teamPageSrc}">
                <img src=${imgSrc} alt="">
                <h3>${name}</h3>
            </a>
        `;
    }
}

customElements.define('my-team', Team);