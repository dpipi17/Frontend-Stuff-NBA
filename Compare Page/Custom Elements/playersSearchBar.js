import Utils from './../../js/utils.js'

export default class PlayersSearchBar extends HTMLElement {

    createPlayerElement(player) {
        var containerDiv = document.createElement("div");
        containerDiv.className = "search_player_card";
        containerDiv.addEventListener("click", () => {
            this.searchBar.value = player.firstName + " " + player.lastName;
            this.playersContainer.style.display = 'none';
            this.dispatchEvent(new CustomEvent("playerChoose", {
                detail: player
            }));
        })

        var image = document.createElement("img");
        image.src = Utils.getPlayerImageSrc(player.personId);

        var name = document.createElement("p");
        name.innerHTML = player.firstName + " " + player.lastName;

        containerDiv.appendChild(image);
        containerDiv.appendChild(name);

        return containerDiv;
    }

    onQueryUpdate(query) {
        this.filteredPlayers = [];
        this.playersContainer.innerHTML = "";
        if (query) {
            this.filteredPlayers = this.players.filter(player =>
                (player.firstName + " " + player.lastName).toLowerCase().includes(query) ||
                (player.lastName + " " + player.firstName).toLowerCase().includes(query)
            );
        }

        if (this.filteredPlayers.length > 0) {
            this.playersContainer.style.display = 'flex';
        } else {
            this.playersContainer.style.display = 'none';
        }


        for (let i = 0; i < this.filteredPlayers.length && i < 9; i++) {
            var player = this.filteredPlayers[i];
            this.playersContainer.appendChild(this.createPlayerElement(player));
        }
    }

    addListeners() {
        this.searchBar.addEventListener('input', (e) => {
            let query = e.target.value.toLowerCase();
            this.onQueryUpdate(query);
        });

        document.addEventListener("click", (evt) => {
            let targetElement = evt.target;

            do {
                if (targetElement == this) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement);

            this.playersContainer.style.display = 'none';
        });
    }

    connectedCallback() {
        let id = this.getAttribute('id');
        this.inputId = id + "_inputId";
        this.playersContainerId = id + "_playersContainerId";

        this.style.alignItems = this.getAttribute('alignItems');
        this.players = JSON.parse(decodeURIComponent(this.getAttribute('players')));

        this.innerHTML = `   
            <input id="${this.inputId}" type="text" placeholder="${this.getAttribute('placeHolder')}" name="search">
            <div id="${this.playersContainerId}" class="search_players_container">

            </div>
        `;

        this.playersContainer = document.getElementById(this.playersContainerId);
        this.searchBar = document.getElementById(this.inputId);
        let defaultPlayer = this.players.find(player => player.personId == this.getAttribute("defaultPlayerId"));
        this.searchBar.value = defaultPlayer ? defaultPlayer.firstName + " " + defaultPlayer.lastName : "";
        this.filteredPlayers = [];

        this.addListeners();
    }
}

customElements.define('my-players-search-bar', PlayersSearchBar);