import HomePage from './../Home Page/home.js';
import TeamsPage from './../Teams page/teams.js'
import StandingPage from './../Standing Page/standing.js'

let routes = {
    '*': () => {
        HomePage.render(updateMainContainer);
    },
    '/Games': () => {
        updateMainContainer('<h1>Games</h1>');
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