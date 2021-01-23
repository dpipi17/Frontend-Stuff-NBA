import PlayersSearchBar from './Custom Elements/playersSearchBar.js'
import CompareRow from './compareRow.js'
import TwoColumnCompare from './twoColumnCompare.js'
import Utils from './../js/utils.js'

export default class ComparePage {

    constructor(type, firstId, secondId) {
        this.type = type ? type : "players";
        this.firstId = firstId;
        this.secondId = secondId;
    }

    getRowsFromPlayerStats(firstStats, secondStats) {
        var result = [];
        firstStats = firstStats.latest;
        secondStats = secondStats.latest;

        result.push(new CompareRow("MIN", firstStats.mpg, secondStats.mpg));
        result.push(new CompareRow("PTS", firstStats.ppg, secondStats.ppg));
        result.push(new CompareRow("REB", firstStats.rpg, secondStats.rpg));
        result.push(new CompareRow("AST", firstStats.apg, secondStats.apg));
        result.push(new CompareRow("STL", firstStats.spg, secondStats.spg));
        result.push(new CompareRow("BLK", firstStats.bpg, secondStats.bpg));
        result.push(new CompareRow("FG%", firstStats.fgp, secondStats.fgp));
        result.push(new CompareRow("3P%", firstStats.tpp, secondStats.tpp));
        result.push(new CompareRow("FT%", firstStats.ftp, secondStats.ftp));

        return result;
    }

    loadData(callback) {
        var players = fetch('data/players.json')
            .then(response => response.json());

        if (this.firstId && this.secondId) {
            var firstplayerStats = fetch("https://data.nba.net/prod/v1/2020/players/" + this.firstId + "_profile.json", {
                    "method": "GET"
                })
                .then(response => response.json());

            var secondPlayerStats = fetch("https://data.nba.net/prod/v1/2020/players/" + this.secondId + "_profile.json", {
                    "method": "GET"
                })
                .then(response => response.json());

            Promise.all([players, firstplayerStats, secondPlayerStats]).then((values) => {
                callback(values[0], this.getRowsFromPlayerStats(values[1].league.standard.stats, values[2].league.standard.stats));
            });
        } else {
            players.then((json) => {
                callback(json, []);
            })
        }

    }

    playerWithSearch(id, players, alignItems, placeHolder, playerId) {
        return `
            <img src="${Utils.getPlayerImageSrc(playerId)}"></img>
            <my-players-search-bar id="${id}"
                players="${encodeURIComponent(JSON.stringify(players))}"
                alignItems="${alignItems}"
                placeHolder="${placeHolder}"
                defaultPlayerId="${playerId}">
            </my-players-search-bar>
        `;
    }

    onPlayerChoos() {
        if (this.firstId && this.secondId) {
            window.location = '#/Compare?type=players&firstId=' + this.firstId + "&secondId=" + this.secondId
        }
    }


    addListeners() {
        var leftPlayerImg = document.querySelector(".compare_top_part .left img");
        var leftSeaBar = document.getElementById("left_search_bar");
        leftSeaBar.addEventListener("playerChoose", (e) => {
            this.firstId = e.detail.personId;
            leftPlayerImg.src = Utils.getPlayerImageSrc(this.firstId);
            this.onPlayerChoos();
        });


        var rightPlayerImg = document.querySelector(".compare_top_part .right img");
        var rightSeaBar = document.getElementById("right_search_bar");
        rightSeaBar.addEventListener("playerChoose", (e) => {
            this.secondId = e.detail.personId;
            rightPlayerImg.src = Utils.getPlayerImageSrc(this.secondId);
            this.onPlayerChoos();
        });
    }

    renderTopPart(players) {
        return `
            <div class="chosen_player left">
                ${this.playerWithSearch("left_search_bar", players, "flex-start", "Search first player...", this.firstId)}
            </div>

            <img class="vs" src="https://www.pngkey.com/png/full/20-208774_torrent-vs-magnet-link-graphic-design.png"></img>

            <div class="chosen_player right">
                ${this.playerWithSearch("right_search_bar", players, "flex-end", "Search second player...", this.secondId)}
            </div>
        `;
    }

    render(callback) {
        this.loadData((players, rows) => {
            this.firstPlayer = players.find(player => player.personId == this.firstId);
            this.secondPlayer = players.find(player => player.personId == this.secondId);

            let content = `
                <div class="compare">
                    <div class="compare_top_part">
                        ${this.renderTopPart(players)}
                    </div>

                    <div class="two_columns_compare_container">
                        <img src="https://www.nba.com/stats/media/img/Gray_logoman.jpg"></img>
                    </div>
                </div>
            `;
            callback(content);

            this.addListeners();

            if (this.firstPlayer && this.secondPlayer) {
                TwoColumnCompare.render((content) => {
                    var compareContainer = document.querySelector('.two_columns_compare_container');
                    compareContainer.innerHTML = content
                }, rows, this.firstPlayer.firstName + " " + this.firstPlayer.lastName, this.secondPlayer.firstName + " " + this.secondPlayer.lastName);
            }

        });
    }
}