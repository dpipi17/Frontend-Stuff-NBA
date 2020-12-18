import GamesPage from './../games.js'

export default class DatePicker extends HTMLElement {

    connectedCallback() {

        var dateStr = this.getAttribute('dateStr');
        this.innerHTML = `
            <img id="prev_day" src="images/left-arrow.svg">
            <input type="date" value="${dateStr}" id="dt"/>
            <img id="next_day" src="images/right-arrow.svg">
        `;

        this.picker = document.getElementById("dt");
        this.prev = document.getElementById("prev_day");
        this.next = document.getElementById("next_day");

        this.picker.addEventListener('change', (e) => {
            this.onDateChange(e.target.value);
        });

        this.prev.addEventListener('click', () => {
            this.changeDate(this.picker.value, -1);
        });

        this.next.addEventListener('click', () => {
            this.changeDate(this.picker.value, +1);
        });
    }

    changeDate(currDateStr, days) {
        var date = new Date(currDateStr);
        date.setDate(date.getDate() + days);

        let gameDate = GamesPage.dateToGameDate(date);
        let dateStr = GamesPage.gameDateStrToDateStr(gameDate);
        this.picker.value = dateStr;
        window.location = '#/Games/' + GamesPage.dateToGameDate(date);
    }

    onDateChange(newDate) {
        window.location = '#/Games/' + GamesPage.dateToGameDate(new Date(newDate));
    }
}

customElements.define('my-date-picker', DatePicker);