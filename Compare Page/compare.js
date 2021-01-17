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
                    <div class="compare_top_part">
                        <div class="chosen_player">
                            <img src="https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png"></img>
                            <my-players-search-bar id="left_search_bar"
                                                players="${encodeURIComponent(JSON.stringify(players))}"
                                                alignItems="flex-start"
                                                placeHolder="Search first player...">
                            </my-players-search-bar>
                        </div>

                        <img class="vs" src="https://www.pngkey.com/png/full/20-208774_torrent-vs-magnet-link-graphic-design.png"></img>

                        <div class="chosen_player">
                            <img src="https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png"></img>
                            <my-players-search-bar id="right_search_bar"
                                                players="${encodeURIComponent(JSON.stringify(players))}"
                                                alignItems="flex-end"
                                                placeHolder="Search second player...">
                            </my-players-search-bar>
                        </div>
                    </div>

                </div>
            `;
            callback(content);
        });
    }
}