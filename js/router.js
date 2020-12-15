import HomePage from './../Home Page/home.js';
import TeamsPage from './../Teams page/teams.js'
import StandingPage from './../Standing Page/standing.js'
import GamesPage from './../Games Page/games.js'

let routes = {
    '*': () => {
        HomePage.render(updateMainContainer);
    },
    '/Games': () => {
        var today = new Date();
        var year = today.getFullYear();
        var month = (today.getMonth() + 1);
        var day = today.getDate();
        var gameDate = year.toString() + (month < 10 ? '0' + month.toString() : month.toString) + (day < 10 ? '0' + day.toString() : day.toString());

        GamesPage.render(updateMainContainer, gameDate)
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
    '/Stats': () => {
        updateMainContainer('<h1>Stats</h1>');
    },
    '/Players': () => {
        updateMainContainer('<h1>Players</h1>');
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