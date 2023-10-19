let menuVisible = false;
let menuSizes = ['50px', '400px'];

var amountOfBubbles = 50;
let minSize = 10;
let maxSize = 20;

let colors = [
    '#231F20',
    '#DDDA95',
    '#D0647A',
    '#DCECE9',
    '#F7EAEA',
    '#FDDDA9',
    '#E3B6B6',
    '#B6B8C1',
    '#A291BE',
    '#B9CCC8',
    '#DDDA95',
    '#D0647A',
    '#DCECE9',
    '#F7EAEA',
    '#FDDDA9',
    '#E3B6B6',
    '#B6B8C1',
    '#A291BE',
    '#B9CCC8', 
    '#DDDA95',
    '#D0647A',
    '#DCECE9',
    '#F7EAEA',
    '#FDDDA9',
    '#E3B6B6',
    '#B6B8C1',
    '#A291BE',
    '#B9CCC8',
    '#DDDA95',
    '#D0647A',
    '#DCECE9',
    '#F7EAEA',
    '#FDDDA9',
    '#E3B6B6',
    '#B6B8C1',
    '#A291BE',
    '#B9CCC8' 
];

$('#hamburger').click( function(){
	toggleMenu();
});

function toggleMenu(){
	let i = ( menuVisible ) ? 0 : 1;
	$('#topmenu').animate( { height : menuSizes[i]},500 );
	menuVisible = !menuVisible;
}

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

function randomArr(arr)
{
    return arr[Math.floor(Math.random()*arr.length)]; 
}

let loadedPage = 'home';

$('.menunode').click( function(e){
    let target = $(e.target).data('target');
    if ( target != loadedPage ){
        hideAllPages();
        $('#' + target).delay(100).fadeIn(100);
        loadedPage = target;
		$(e.target).addClass('active');
    }
});

function hideAllPages(){
	if ( menuVisible ){
		toggleMenu();
	}
    $('.page').fadeOut(100);
	$('.menunode').removeClass('active');
}