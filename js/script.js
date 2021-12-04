const selectElement = document.querySelector('.lr-list');
var frames = window.parent.frames;
var links = ["/frame/LR2.html", "/frame/LR3.html",
	"/frame/LR4.html", "/frame/LR5.html",
	"/frame/LR6.html", "/frame/LR7.html",
	"/frame/LR8.html", "/frame/LR9.html", "/frame/LR10.html"];

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

window.onload = function () {
	var elems = document.getElementsByTagName('select');
	for (var i = 0; i < elems.length; i++) {
		var elem = elems[i],
			c = getCookie("lr");
		elem.selectedIndex = c !== undefined ? c : 0;
		frames[2].location = links[c !== undefined || null ? c : 0];
	}
}

if (selectElement) {
	selectElement.addEventListener('change', (event) => {
		var index = event.target.selectedIndex;
		switch (index) {
			case 0:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;

			case 1:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;

			case 2:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;

			case 3:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;

			case 4:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;

			case 5:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;
			case 6:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;
			case 7:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;
			case 8:
				setCookie("lr", index, 30);
				frames[2].location = links[index];
				break;
			default:
				break;
		}
	});
}
