const menuVisible = false;
const menuSizes = ['50px', '400px'];

const amountOfBubbles = 50;
const minSize = 10;
const maxSize = 20;

const colors = [
    '#231F20', '#DDDA95', '#D0647A', '#DCECE9', '#F7EAEA',
    '#FDDDA9', '#E3B6B6', '#B6B8C1', '#A291BE', '#B9CCC8',
    '#DDDA95', '#D0647A', '#DCECE9', '#F7EAEA', '#FDDDA9',
    '#E3B6B6', '#B6B8C1', '#A291BE', '#B9CCC8', '#DDDA95',
    '#D0647A', '#DCECE9', '#F7EAEA', '#FDDDA9', '#E3B6B6',
    '#B6B8C1', '#A291BE', '#B9CCC8', '#DDDA95', '#D0647A',
    '#DCECE9'
];

function setup(){
	amountOfBubble = Math.floor( windowWidth * 0.25);
	let canvas = createCanvas(windowWidth, 100);
	canvas.parent('canvas-holder');
	drawBubbles();
}

function drawBubbles(){
	let x = 20;
	amountOfBubble = Math.floor( windowWidth * 0.1);
	for ( let i=0; i < amountOfBubbles; i++ ){
		noStroke();
		fill( randomArr(colors) );
		circle(random(windowWidth),random(maxSize,80), random(minSize,maxSize));
		x += random(25);
		if ( x > windowWidth ){
			x = 20;
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, 100);
	drawBubbles();
}

function randomArr(arr) {
	return arr[Math.floor(Math.random()*arr.length)]; 
}

document.getElementById('hamburger').addEventListener('click', function(){
	var menuNodes = document.getElementsByClassName('menunode');
	for (var i = 0; i < menuNodes.length; i++) {
		menuNodes[i].style.display = (menuNodes[i].style.display === 'none') ? 'block' : 'none';
	}
	var menuLinks = document.querySelectorAll('.menunode a');
	menuLinks.forEach(function(link) {
		link.addEventListener('click', function() {
			for (var i = 0; i < menuNodes.length; i++) {
				menuNodes[i].style.display = 'none';
			}
		});
	});
	
});

var menuLinks = document.querySelectorAll('.menunode a');

menuLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		var showPanel = link.getAttribute('href');
		history.pushState(null, null, showPanel);
		var pages = document.getElementsByClassName('page');
		for (var i = 0; i < pages.length; i++) {
			pages[i].style.display = 'none';
		}
		document.querySelector(showPanel).style.display = 'block';
		var menuLinks = document.querySelectorAll('.menunode a');
		menuLinks.forEach(function(link) {
			link.removeAttribute('class');
		});
		link.classList.add(showPanel.replace('#', ''));
	});
});

document.addEventListener('DOMContentLoaded', function() {
	if (window.location.hash) {
		var showPanel = window.location.hash;
	} else {
		var showPanel = '#home';
	}
	var pages = document.getElementsByClassName('page');
	for (var i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}
	document.querySelector(showPanel).style.display = 'block';
	var menuLinks = document.querySelectorAll('.menunode a');
	/* add the class to the link that matches the hash */
	menuLinks.forEach(function(link) {
		link.removeAttribute('class');
		if (link.getAttribute('href') == showPanel) {
			link.classList.add(showPanel.replace('#', ''));
		}
	});

});