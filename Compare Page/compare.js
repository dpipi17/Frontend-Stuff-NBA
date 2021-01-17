import PlayersSearchBar from './Custom Elements/playersSearchBar.js'

export default class ComparePage {

    static loadData(callback) {
        var players = fetch('data/players.json')
            .then(response => response.json());

        Promise.all([players]).then((values) => {
            callback(values[0]);
        });
    }

    static render(callback) {
        this.loadData((players) => {
            let content = `
                <div class="compare">
                    <my-players-search-bar id="left_search_bar"
                                           players="${encodeURIComponent(JSON.stringify(players))}"
                                           alignItems="flex-start"
                                           placeHolder="Search first player...">
                    </my-players-search-bar>

                    <my-players-search-bar id="right_search_bar"
                                        players="${encodeURIComponent(JSON.stringify(players))}"
                                        alignItems="flex-end"
                                        placeHolder="Search second player...">
                    </my-players-search-bar>

                </div>
            `;
            callback(content);
        });
    }
}