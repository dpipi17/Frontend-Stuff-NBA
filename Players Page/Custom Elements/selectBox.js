export default class SelectBox extends HTMLElement {

    renderOptions(teamsInfo) {
        return Object.keys(teamsInfo).map(key => `
            <option value="${key}">
                ${teamsInfo[key].displayName}
            </option>
        `).join(' ');
    }

    connectedCallback() {
        let text = this.getAttribute('text');
        let posibleValues = JSON.parse(decodeURIComponent(this.getAttribute('posibleValues')));
        let team = this.getAttribute('value');
        this.innerHTML = `   
            <h3>${text}</h3>        
            <select class="select-css">
                ${this.renderOptions(posibleValues)}
            </select>           
        `;

        let select = document.querySelector('.select-css');
        select.value = team;
        document.querySelector('.select-css').addEventListener("change", () => {
            window.location = '#/Players/' + select.value;
        })

    }
}

customElements.define('my-select-box', SelectBox);