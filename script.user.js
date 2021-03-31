// ==UserScript==
// @name         TheZombsProject
// @namespace    https://github.com/eh7644/thezombsproject/
// @version      1.7.2
// @description  Instructions at the GitHub page on how to install and use it, aka https://github.com/eh7644/thezombsproject/blob/main/README.md
// @author       thezombsproject
// @match        zombs.io
// @require      https://github.com/eh7644/thezombsproject/raw/main/menu.user.js
// ==/UserScript==
const onEnterWorld = () => {
	window.onerror = function (e) {
		game.ui.getComponent("PopupOverlay")
			.showHint(`An error occoured: ${e}`, 5e3)
	};
}

game.network.addEnterWorldHandler(onEnterWorld);
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
const sell = type => {
	var SellArrows = function () {
		for (var uid in entities) {
			if (!entities.hasOwnProperty(uid)) continue;
			var obj = entities[uid];
			if (obj.fromTick.model == type) {
				Game.currentGame.network.sendRpc({
					name: "DeleteBuilding",
					uid: obj.fromTick.uid
				})
			}
		}
	}
    game.ui.getComponent("PopupOverlay")
        .showHint(`Sold ${type}s`, 3e3);
}
const upgrade = type => {
	for (var uid in entities) {
		if (!entities.hasOwnProperty(uid)) continue;
		var obj = entities[uid]
		if (obj.fromTick.model == type) {
			Game.currentGame.network.sendRpc({
				name: "UpgradeBuilding",
				uid: obj.fromTick.uid
			})
		}
	}
}

const sellAllBut = type => {
	for (var uid in entities) {
		if (!entities.hasOwnProperty(uid)) continue;
		var obj = entities[uid]
		if (obj.fromTick.model !== type) {
			Game.currentGame.network.sendRpc({
				name: "DeleteBuilding",
				uid: obj.fromTick.uid
			})
		}
	}
}

const upgradeAllBut = type => {
	for (var uid in entities) {
		if (!entities.hasOwnProperty(uid)) continue;
		var obj = entities[uid]
		if (obj.fromTick.model !== type) {
			Game.currentGame.network.sendRpc({
				name: "UpgradeBuilding",
				uid: obj.fromTick.uid
			})
		}
	}
}

const cfp = [{
	path: "sellwallsbtn",
	function: () => {
		sell("Wall")
	}
}, {
	path: "selldoorsbtn",
	function: () => {
		sell("Door")
	}
}, {
	path: "sellmagesbtn",
	function: () => {
		sell("MagicTower")
	}
}, {
	path: "sellmeleesbtn",
	function: () => {
		sell("MeleeTower")
	}
}, {
	path: "sellminesbtn",
	function: () => {
		sell("GoldMine")
	}
}, {
	path: "sellbombsbtn",
	function: () => {
		sell("BombTower")
	}
}, {
	path: "sellarrowsbtn",
	function: () => {
		sell("ArrowTower")
	}
}, {
	path: "sellcannonsbtn",
	function: () => {
		sell("CannonTower")
	}
}, {
	path: "sellharvsbtn",
	function: () => {
		sell("Harvester")
	}
}, {
	path: "upwallsbtn",
	function: () => {
		upgrade("Wall")
	}
}, {
	path: "updoorsbtn",
	function: () => {
		upgrade("Door")
	}
}, {
	path: "upmagesbtn",
	function: () => {
		upgrade("MagicTower")
	}
}, {
	path: "upmeleesbtn",
	function: () => {
		upgrade("MeleeTower")
	}
}, {
	path: "upminesbtn",
	function: () => {
		upgrade("GoldMine")
	}
}, {
	path: "upbombsbtn",
	function: () => {
		upgrade("BombTower")
	}
}, {
	path: "uparrowsbtn",
	function: () => {
		upgrade("ArrowTower")
	}
}, {
	path: "upcannonsbtn",
	function: () => {
		upgrade("CannonTower")
	}
}, {
	path: "upharvsbtn",
	function: () => {
		upgrade("Harvester")
	}
}]
addEventListener('load', function (e) {
	document.querySelector('#scanallservsbtn')
		.addEventListener('click', scanServers);
	document.querySelector('#scanserverbtn')
		.addEventListener('click', scanServer);
	document.querySelector('#scanlbdatabtn')
		.addEventListener('click', scanPlayers);;
	document.querySelector('#scanplayernamesbtn')
		.addEventListener('click', scanPlayers)
	cfp.forEach((objc => {
		document.querySelector(`#${objc.path}`)
			.addEventListener('click', objc.function);
	}));
});
