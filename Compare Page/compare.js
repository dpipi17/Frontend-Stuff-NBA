import PlayersSearchBar from './Custom Elements/playersSearchBar.js'
import TwoColumnCompare from './twoColumnCompare.js'
import Utils from './../js/utils.js'

export default class ComparePage {

    constructor(firstPlayerId, secondPlayerId) {
        this.firstPlayerId = firstPlayerId;
        this.secondPlayerId = secondPlayerId;
    }

    loadData(callback) {
        var players = fetch('data/players.json')
            .then(response => response.json());

        Promise.all([players]).then((values) => {
            callback(values[0]);
        });
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
        if (this.firstPlayerId && this.secondPlayerId) {
            window.location = '#/Compare/' + this.firstPlayerId + "/" + this.secondPlayerId;
        }
    }


    addListeners() {
        var leftPlayerImg = document.querySelector(".compare_top_part .left img");
        var leftSeaBar = document.getElementById("left_search_bar");
        leftSeaBar.addEventListener("playerChoose", (e) => {
            this.firstPlayerId = e.detail.personId;
            leftPlayerImg.src = Utils.getPlayerImageSrc(this.firstPlayerId);
            this.onPlayerChoos();
        });


        var rightPlayerImg = document.querySelector(".compare_top_part .right img");
        var rightSeaBar = document.getElementById("right_search_bar");
        rightSeaBar.addEventListener("playerChoose", (e) => {
            this.secondPlayerId = e.detail.personId;
            rightPlayerImg.src = Utils.getPlayerImageSrc(this.secondPlayerId);
            this.onPlayerChoos();
        });
    }

    renderTopPart(players) {
        return `
            <div class="chosen_player left">
                ${this.playerWithSearch("left_search_bar", players, "flex-start", "Search first player...", this.firstPlayerId)}
            </div>

            <img class="vs" src="https://www.pngkey.com/png/full/20-208774_torrent-vs-magnet-link-graphic-design.png"></img>

            <div class="chosen_player right">
                ${this.playerWithSearch("right_search_bar", players, "flex-end", "Search second player...", this.secondPlayerId)}
            </div>
        `;
    }

    render(callback) {
        this.loadData((players) => {
            this.firstPlayer = players.find(player => player.personId == this.firstPlayerId);
            this.secondPlayer = players.find(player => player.personId == this.secondPlayerId);

            let content = `
                <div class="compare">
                    <div class="compare_top_part">
                        ${this.renderTopPart(players)}
                    </div>

                    <div class="two_columns_compare_container">
                        
                    </div>
                </div>
            `;
            callback(content);

            this.addListeners();

            if (this.firstPlayer && this.secondPlayerId) {
                TwoColumnCompare.render((content) => {
                    var compareContainer = document.querySelector('.two_columns_compare_container');
                    compareContainer.innerHTML = content
                }, null);
            }

        });
    }
}