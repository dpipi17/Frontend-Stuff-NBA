import GameCard from './Custom Elements/gameCard.js'
import DatePicker from './Custom Elements/datePicker.js'

export default class GamesPage {

    static dateToGameDate(date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1);
        var day = date.getDate();
        var gameDate = year.toString() + (month < 10 ? '0' + month.toString() : month.toString) + (day < 10 ? '0' + day.toString() : day.toString());
        return gameDate;
    }

    static gameDateStrToDateStr(gameDate) {
        return gameDate.substring(0, 4) + "-" + gameDate.substring(4, 6) + "-" + gameDate.substring(6, 8);
    }

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
                    <div class="datePickerContainer">
                        <my-date-picker dateStr="${this.gameDateStrToDateStr(gameDate)}"> </my-date-picker>
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