export default class Utils {

    static getPlayerImageSrc(playerId) {
        if (playerId) {
            return `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
        }
        return `https://www.nba.com/resources/static/team/v2/celtics/media/generic-player-1040x760.png`;
    }
}