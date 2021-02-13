export default class Utils {

    static getPlayerImageSrc(playerId) {
        if (playerId) {
            return `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
        }
        return `https://www.nba.com/resources/static/team/v2/celtics/media/generic-player-1040x760.png`;
    }

    static getTeamLogoImage(teamId) {
        return `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`;
    }

    static photo_links() {
        return {
            "ATL": "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png",
            "BOS": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png",
            "BKN": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png",
            "CHA": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png",
            "CHI": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png",
            "CLE": "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/1200px-Cavs_de_Cleveland_logo_2017.png",
            "DET": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/1200px-Pistons_logo17.svg.png",
            "IND": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png",
            "MIA": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png",
            "MIL": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png",
            "NYK": "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png",
            "ORL": "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1200px-Orlando_Magic_logo.svg.png",
            "PHI": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png",
            "TOR": "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/200px-Toronto_Raptors_logo.svg.png",
            "WAS": "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png",
            "DAL": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png",
            "DEN": "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png",
            "GSW": "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
            "HOU": "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png",
            "LAC": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png",
            "LAL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
            "MEM": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
            "MIN": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png",
            "NOP": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png",
            "OKC": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/200px-Oklahoma_City_Thunder.svg.png",
            "PHX": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png",
            "POR": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
            "SAC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png",
            "SAS": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png",
            "UTA": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/1200px-Utah_Jazz_logo_%282016%29.svg.png"
        };
    }

    static teams_page_links() {
        return {
            "ATL": "https://www.nba.com/hawks/",
            "BOS": "https://www.nba.com/celtics/",
            "BKN": "https://www.nba.com/nets/",
            "CHA": "https://www.nba.com/hornets/",
            "CHI": "https://www.nba.com/bulls/",
            "CLE": "https://www.nba.com/cavaliers/",
            "DET": "https://www.nba.com/pistons/",
            "IND": "https://www.nba.com/pacers/",
            "MIA": "https://www.nba.com/heat/",
            "MIL": "https://www.nba.com/bucks/",
            "NYK": "https://www.nba.com/knicks/",
            "ORL": "https://www.nba.com/magic/",
            "PHI": "https://www.nba.com/sixers/",
            "TOR": "https://www.nba.com/raptors/",
            "WAS": "https://www.nba.com/wizards/",
            "DAL": "https://www.mavs.com/",
            "DEN": "https://www.nba.com/nuggets/allstar21",
            "GSW": "https://www.nba.com/warriors/",
            "HOU": "https://www.nba.com/rockets/",
            "LAC": "https://www.nba.com/clippers/",
            "LAL": "https://www.nba.com/lakers/",
            "MEM": "https://www.nba.com/grizzlies/",
            "MIN": "https://www.nba.com/timberwolves/",
            "NOP": "https://www.nba.com/pelicans/",
            "OKC": "https://www.nba.com/thunder/",
            "PHX": "https://www.nba.com/suns/",
            "POR": "https://www.nba.com/blazers/",
            "SAC": "https://www.nba.com/kings/",
            "SAS": "https://www.nba.com/spurs/",
            "UTA": "https://www.nba.com/jazz/"
        };
    }
}