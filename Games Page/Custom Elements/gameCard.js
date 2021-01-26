import Utils from './../../js/utils.js'

export default class GameCard extends HTMLElement {

    static renderCardMiddle(game) {
        if (game.gameDuration.hours === '') {
            return `
                <h2>${game.startTimeEastern}</h2>
            `;
        }

        return `
            <h1>${game.vTeam.score} </h1>    
            <h3>Final</h3>
            <h1>${game.hTeam.score}</h1>           
        `;
    }

    connectedCallback() {
        var game = JSON.parse(decodeURIComponent(this.getAttribute('data')));
        this.innerHTML = `
            <a class="gamecard" href="https://www.nba.com/game/${game.vTeam.triCode.toLowerCase()}-vs-${game.hTeam.triCode.toLowerCase()}-${game.gameId}">
                <div class="team_in_card">
                    <img src=${Utils.photo_links[game.vTeam.triCode]} alt="">
                    <h3>${game.vTeam.triCode}</h3>
                    <p>${game.vTeam.win}-${game.vTeam.loss}</p>
                </div>

                <div class="cardMiddle">
                    ${GameCard.renderCardMiddle(game)}
                </div>

                <div class="team_in_card">
                <img src=${Utils.photo_links[game.hTeam.triCode]} alt="">
                <h3>${game.hTeam.triCode}</h3>
                <p>${game.hTeam.win}-${game.hTeam.loss}</p>
            </div>
            </a>
        `;
    }
}

customElements.define('my-game-card', GameCard);