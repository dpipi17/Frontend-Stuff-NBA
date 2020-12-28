import HomePage from './../Home Page/home.js';
import TeamsPage from './../Teams page/teams.js'
import StandingPage from './../Standing Page/standing.js'
import GamesPage from './../Games Page/games.js'
import PlayersPage from './../Players Page/players.js'

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
    '/Game/:gameId': (params) => {
        alert(params.gameId);
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
    '/Fantasy': () => {
        updateMainContainer('<h1>Fantasy</h1>');
    },

};

window.addEventListener("load", () => {
    var router = new Navigo(null, true, '#');
    router.on(routes).resolve();
})

function updateMainContainer(content) {
    var mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = content
}