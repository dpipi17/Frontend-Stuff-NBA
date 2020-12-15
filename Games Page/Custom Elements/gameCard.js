import TeamsPage from './../../Teams page/teams.js'

export default class GameCard extends HTMLElement {
    connectedCallback() {
        var game = JSON.parse(decodeURIComponent(this.getAttribute('data')));
        console.log(game);
        this.innerHTML = `
            <a class="gamecard" href="#/Game/${game.gameId}">
                <div class="team_in_card">
                    <img src=${TeamsPage.photo_links[game.hTeam.triCode]} alt="">
                    <h3>${game.hTeam.triCode}</h3>
                    <p>${game.hTeam.win}-${game.hTeam.loss}</p>
                </div>

                ${
                    'vs'
                }

                <div class="team_in_card">
                    <img src=${TeamsPage.photo_links[game.vTeam.triCode]} alt="">
                    <h3>${game.vTeam.triCode}</h3>
                    <p>${game.vTeam.win}-${game.vTeam.loss}</p>
                </div>
            </a>
        `;
    }
}

customElements.define('my-game-card', GameCard);