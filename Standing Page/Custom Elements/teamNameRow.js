export default class TeamNameRow extends HTMLElement {
    connectedCallback() {
        let name = this.getAttribute('name');
        let imgSrc = this.getAttribute('imageSrc');
        let teamPageSrc = this.getAttribute('teamPage');
        let rank = this.getAttribute('rank');
        this.innerHTML = `
            <a class="team_name_row" href="${teamPageSrc}">
                <p><b>${rank}</b></p>
                <img src=${imgSrc} alt="">
                <p>${name}</p>
            </a>
        `;
    }
}

customElements.define('my-team-row', TeamNameRow);