import HomePage from './../Home Page/home.js';
import TeamsPage from './../Teams page/teams.js'
import StandingPage from './../Standing Page/standing.js'
import GamesPage from './../Games Page/games.js'
import PlayersPage from './../Players Page/players.js'
import PlayerPage from './../Player Page/player.js'
import ComparePage from './../Compare Page/compare.js'

let routes = {
    '*': () => {
        HomePage.render(updateMainContainer);
    },
    '/Games': () => {
        GamesPage.render(updateMainContainer, GamesPage.dateToGameDate(new Date()))
    },
    '/Games/:gameDate': (params) => {
        GamesPage.render(updateMainContainer, params.gameDate)
    },
    '/Standings': () => {
        StandingPage.render(updateMainContainer);
    },
    '/Teams': () => {
        TeamsPage.render(updateMainContainer);
    },
    '/Players': () => {
        PlayersPage.render(updateMainContainer);
    },
    '/Players/:team': (params) => {
        PlayersPage.render(updateMainContainer, params.team);
    },
    '/Player/:playerId': (params) => {
        PlayerPage.render(updateMainContainer, params.playerId);
    },
    '/Compare': () => {
        let comparePage = new ComparePage();
        comparePage.render(updateMainContainer)
    },
    '/Compare/:firstPlayerId/:secondPlayerId': (params) => {
        let comparePage = new ComparePage(params.firstPlayerId, params.secondPlayerId);
        comparePage.render(updateMainContainer, params.firstPlayerId, params.secondPlayerId)
    }

};

window.addEventListener("load", () => {
    var router = new Navigo(null, true, '#');
    router.on(routes).resolve();
})

function updateMainContainer(content) {
    var mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = content
}