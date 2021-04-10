// ==UserScript==
// @name         TheZombsProject: Menu
// @namespace    https://github.com/eh7644/thezombsproject
// @version      1.3.5
// @description  Script menu, script is installed at https://github.com/eh7644/thezombsproject/raw/main/script.user.js
// @author       thezombsproject
// @match        zombs.io
// @grant        none
// ==/UserScript==
let css = `
.btn-bluee {
  background-color: #003cff;
  margin-bottom: 2.5px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  color: #ffffff;
  border-color: #003cff;
  text-shadow: 1px 1px black;
}
.btn-bluee:hover {
  background-color: #254bc4;
  margin-bottom: 2.5px;
  margin-right: 5.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 18.5px;
  outline: none;
  color: #FFFFFF;
  border-color: #254bc4;
  text-shadow: 1px 1px black;
}`;
let style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
let css3 = `
.btn-greenn {
  background-color: #24cc1f;
  margin-bottom: 2.5px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  color: #ffffff;
  border-color: #24cc1f;
  text-shadow: 1px 1px black;
}
.btn-greenn:hover {
  background-color: #34a331;
  margin-bottom: 2.5px;
  margin-right: 5.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 18.5px;
  outline: none;
  color: #FFFFFF;
  border-color: #34a331;
  text-shadow: 1px 1px black;
}`;
let style1 = document.createElement("style");
style1.appendChild(document.createTextNode(css3));
document.head.appendChild(style1);
let css4 = `
.btn-orangee {
  background-color: #e06d14;
  margin-bottom: 2.5px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  color: #ffffff;
  border-color: #e06d14;
  text-shadow: 1px 1px black;
}
.btn-orangee:hover {
  background-color: #b06830;
  margin-bottom: 2.5px;
  margin-right: 5.5px;
  margin-left: 2.5px;
  border-radius: 8px;
  font-size: 18.5px;
  outline: none;
  color: #FFFFFF;
  border-color: #b06830;
  text-shadow: 1px 1px black;
}`;
let style2 = document.createElement("style");
style2.appendChild(document.createTextNode(css4));
document.head.appendChild(style2);
let css2 = `
.btn:hover {
cursor: pointer;
}
.btn-blue {
background-color: #144b7a;
}
.btn-blue:hover .btn-blue:active {
background-color: #4fa7ee;
}
.box {
display: block;
width: 100%;
height: 100px;
line-height: 34px;
padding: 8px 14px;
margin: 0 0 10px;
background: #eee;
border: 0;
font-size: 14px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
border-radius: 4px;
}
.codeIn, .joinOut {
height: 50px;
}
.hud-menu-zipp {
display: none;
position: fixed;
top: 48%;
left: 50%;
width: 600px;
height: 570px;
margin: -270px 0 0 -300px;
padding: 20px;
background: rgba(0, 0, 0, 0.6);
color: #eee;
border-radius: 4px;
z-index: 15;
}
.hud-menu-zipp h3 {
display: block;
margin: 0;
line-height: 20px;
}
.hud-menu-zipp .hud-zipp-grid {
display: block;
height: 380px;
padding: 10px;
margin-top: 18px;
background: rgba(0, 0, 0, 0.2);
}
.hud-spell-icons .hud-spell-icon[data-type="Zippity"]::before {
background-image: url("https://cdn2.iconfinder.com/data/icons/atrous/512/hammer_tool-512.png");
}
.hud-menu-zipp .hud-the-tab {
position: relative;
height: 40px;
line-height: 40px;
margin: 20px;
border: 0px solid rgb(0, 0, 0, 0);
}
.hud-menu-zipp .hud-the-tab {
display: block;
float: left;
padding: 0 14px;
margin: 0 1px 0 0;
font-size: 14px;
background: rgba(0, 0, 0, 0.4);
color: rgba(255, 255, 255, 0.4);
transition: all 0.15s ease-in-out;
}
.hud-menu-zipp .hud-the-tab:hover {
background: rgba(0, 0, 0, 0.2);
color: #eee;
cursor: pointer;
}
`;
let styles = document.createElement("style");
styles.appendChild(document.createTextNode(css2));
document.head.appendChild(styles);
var menus = document.getElementsByClassName("hud-menu");
// class changing
document.getElementsByClassName("hud-intro-form")[0].style.height = "300px";
document.getElementsByClassName("hud-intro-play")[0].setAttribute("class", "btn btn-blue hud-intro-play");
// spell icon
let spell = document.createElement("div");
spell.classList.add("hud-spell-icon");
spell.setAttribute("data-type", "Zippity")
spell.innerHTML = `<div class="hud-tooltip-menu-icon">
                                       <h4>Scripts</h4>
                                    </div>`
spell.innerHTML = "Main";
spell.classList.add("hud-zipp-icon");
document.getElementsByClassName("hud-spell-icons")[0].appendChild(spell);
//Menu for spell icon
let modHTML = `
<div class="hud-menu-zipp">
<br />
<div class="hud-zipp-grid">
</div>
</div>
`;
document.body.insertAdjacentHTML("afterbegin", modHTML);
let zipz124 = document.getElementsByClassName("hud-menu-zipp")[0];
var theTooltip = document.createElement("div");
theTooltip.innerHTML = `<div class="hud-tooltip-menu-icon">
                                       <h4>Scripts</h4>
                                    </div>`
//Onclick
document.getElementsByClassName("hud-zipp-icon")[0].addEventListener("click", function () {
	if (zipz124.style.display == "none") {
		zipz124.style.display = "block";
		for (var i = 0; i < menus.length; i++) {
			menus[i].style.display = "none";
		}
	} else {
		zipz124.style.display = "none";
	};
});
let _menu = document.getElementsByClassName("hud-menu-icon");
let _spell = document.getElementsByClassName("hud-spell-icon");
let allIcon = [
        _menu[0],
        _menu[1],
        _menu[2],
  _spell[0],
  _spell[1]
];
allIcon.forEach(function (elem) {
	elem.addEventListener("click", function () {
		if (zipz124.style.display == "block") {
			zipz124.style.display = "none";
		};
	});
});
// key to open and close
function modm() {
	if (zipz124.style.display == "none") {
		zipz124.style.display = "block";
		for (var i = 0; i < menus.length; i++) {
			menus[i].style.display = "none";
		}
	} else {};
};
document.getElementsByClassName("hud-zipp-grid")[0].innerHTML = `
<div "text-align:center"><br>
<hr />
<h3>Logs</h3>
<hr />
<div id="activitylogs" style="overflow:scroll;width:100%;height:100%;" width="100%" height="100%">
</div>
</div>
  `;
document.getElementsByClassName("hud-settings-grid")[0].innerHTML = `
<div style="text-align:center"><br>
<hr />
<h3>Scanning</h3>
<p>This is for scanning game data, specifically servers and leaderboard info</p>
<hr />
<button class=\"btn btn-bluee\" style=\"width: 45%;\" id="scanserverbtn">Scan Server</button>
<button class=\"btn btn-bluee\" style=\"width: 45%;\" id="scanplayernamesbtn">Scan Player Names</button>
<button class=\"btn btn-bluee\" style=\"width: 90%;\" id="scanlbdatabtn">Scan Leaderboard Data</button>
<button class=\"btn btn-bluee\" style=\"width:90%"\ id="scanallservsbtn">All Servers Data</button>
<hr />
<h3>Sell & Upgrade</h3>
<p>Selling and upgrading in one click!</p>
<hr />
<div class="tzpExceptionDiv"><label style="display:inline-block;margin-right:10px;">Sell all except towers? </label><input type="checkbox" id="sellallbutchk" style="display:inline-block;"/></div>
<hr>
<br />
<button class=\"btn btn-greenn\"style=\"width: 90%;\" id="sellallbtn">Sell All?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellwallsbtn">Sell Walls?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="selldoorsbtn">Sell Doors?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="selltrapsbtn">Sell Slow Traps?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellarrowsbtn">Sell Arrows?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellcannonsbtn">Sell Cannons?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellmeleesbtn">Sell Melees?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellbombsbtn">Sell Bombs?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellmagesbtn">Sell Mages?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellminesbtn">Sell Gold Mines?</button>
<button class=\"btn btn-greenn\"style=\"width: 45%;\" id="sellharvsbtn">Sell Harvesters?</button>
<hr />
<div class="tzpExceptionDiv"><label style="display:inline-block;margin-right:10px;">Upgrade all except towers? </label><input type="checkbox" id="upallbutchk" style="display:inline-block;" /></div>
<hr />
<br />
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upwallsbtn">Upgrade Walls?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="updoorsbtn">Upgrade Doors?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="uptrapsbtn">UpgradeSlowTraps?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="uparrowsbtn">Upgrade Arrows?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upcannonsbtn">Upgrade Cannons?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upmeleesbtn">Upgrade Melees?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upbombsbtn">Upgrade Bombs?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upmagesbtn">Upgrade Mages?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upminesbtn">UpgradeGoldMines?</button>
<button class=\"btn btn-orangee\"style=\"width: 45%;\" id="upharvsbtn">Upgrade Harvesters?</button>
<hr />
<h3>Scan Players</h3>
<input class="scanpplinput" value="Player" type="text" placeholder="name">
<button class="scanpplbutton">Scan?</button>
<br>
<input class="scanpplinput2" value="1000" type="number" placeholder="highestwave">
<button class="highestwavebutton">Get highest waves?</button>
<br>
<input class="scanpplinput3" value="1000000000" type="number" placeholder="highestscore">
<button class="highestscorebutton">Get highest score?</button>
<p class = "idk"></p>
<hr />
<h3>Miscellaneous</h3>
<p>Coming Soon!</p>
<hr />
<h3>Information</h3>
<hr />
<h4>If you want to work with us,</h4><a href="https://github.com/eh7644/thezombsproject">click here</a>
</div>
`;
