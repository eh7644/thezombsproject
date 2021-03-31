// ==UserScript==
// @name         TheZombsProject
// @namespace    https://github.com/eh7644/thezombsproject/
// @version      1.7.0
// @description  Instructions at the GitHub page on how to install and use it, aka https://github.com/eh7644/thezombsproject/blob/main/README.md
// @author       thezombsproject
// @match        zombs.io
// @require      https://github.com/eh7644/thezombsproject/raw/main/menu.user.js
// ==/UserScript==
/*
const onEnterWorld = () => {
	window.onerror = function (e) {
		game.ui.getComponent("PopupOverlay")
			.showHint(`An error occoured: ${e}`, 5e3)
	};
}
game.network.addEnterWorldHandler(onEnterWorld);
*/
let entities;
setInterval(() => {
	entities = game.world.entities;
}, 10)
var scanServers = function () {
	Object.values(game.options.servers)
		.forEach((item => {
			alert(JSON.stringify(item))
		}))
}
var scanServer = function () {
	var current = []
	Object.entries(game.ui.getComponent('Leaderboard')
			.leaderboardData)
		.forEach((item => {
			current.push(item)
			alert(JSON.stringify(current) + "<br><br>")
		}))
	return JSON.stringify(current)
}
var scanPlayers = function () {
	var current = []
	Object.entries(game.ui.getComponent('Leaderboard')
			.playerNames)
		.forEach((item => {
			current.push(item)
			alert(JSON.stringify(current) + "<br><br>")
		}))
	return JSON.stringify(current)
}
var leaderboardData = function () {
	var current = []
	Object.entries(game.ui.components.Leaderboard.leaderboardData)
		.forEach((item => {
			current.push(item)
			alert(JSON.stringify(current) + "<br><br>")
		}))
	return JSON.stringify(current)
}
addEventListener('load', function (e) {
	document.querySelector('#scanallservsbtn')
		.addEventListener('click', scanServers);
	document.querySelector('#scanserverbtn')
		.addEventListener('click', scanServer);
	document.querySelector('#scanlbdatabtn')
		.addEventListener('click', scanPlayers);;
	document.querySelector('#scanplayernamesbtn')
		.addEventListener('click', scanPlayers)
});
