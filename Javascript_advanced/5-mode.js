function changeMode(size, weight, transform, background, color) {
	return function(){
		document.style.fontSize = size;
		document.style.weight = weight;
		document.style.transform = transform;
		document.style.background = background;
		document.style.color = color;
	}
}

function main() {
	var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	var darkMode = changeMode(12, 'bold', 'capitalize', 'black','white');
	var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

var element = document.createElement('p');
element.innerHTML = 'Welcome Holberton!';
document.body.append(element);

var spookyy = document.createElement('button');
spookyy.id = 'spookyy';
spookyy.innerText = 'Spooky';
document.body.append(spookyy);
document.getElementById('spookyy').onclick = spooky;

var darkk = document.createElement('button');
darkk.id = 'darkk';
darkk.innerText = 'Dark mode';
document.body.append(darkk);
document.getElementById('darkk').onclick = darkMode;

var screamm = document.createElement('button');
screamm.id = 'screamm';
screamm.innerText = 'Scream mode';
document.body.append(screamm);
document.getElementById('screamm').onclick = screamMode;
}

main();
