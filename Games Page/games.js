import GameCard from './Custom Elements/gameCard.js'

export default class GamesPage {

    static loadGames(callback, gameDate) {
        fetch("http://data.nba.net/prod/v2/" + gameDate + "/scoreboard.json", {
                "method": "GET"
            })
            .then(response => response.json())
            .then((json) => {
                callback(json.games);
            });
    }

    static renderGameCards(games) {
        return games.map(game => `
            <my-game-card data=${encodeURIComponent(JSON.stringify(game))}> </my-game-card>
        `).join(' ');
    }

    static render(callback, gameDate) {
        this.loadGames((games) => {
            let content = `
                <div class="games">
                    <div class="datePicker">

                    </div>
                    
                    <div class="gameCards">
                        ${this.renderGameCards(games)}
                    </div>
                </div>
            `;
            callback(content);
        }, gameDate);
    }
}