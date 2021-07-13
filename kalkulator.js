let input = document.getElementsByTagName('input')[0]
input.setAttribute('id', 'layar');

function css(element, style){
	for(let property in style)
		element.style[property] = style[property];
}

let layar = document.querySelector('#layar');
css(layar, {
	'width' : '100%',
	'box-sizing': 'border-box',
	'border': '1px solid #cecece',
	'font-size': '25px',
	'font-weight': 'bold',
	'color': 'grey',
	'padding': '7px 6px',
	'text-align': 'right',
	'outline': 'none'
});

let containerTombol = document.querySelector('.container-tombol');
css(containerTombol, {
	'display': 'flex',
    'flex-wrap': 'wrap'
});

let kal = document.querySelector('.kalkulator');
css(kal, {
	'width': '300px',
	'background-color': '#eaeaea',
	'margin': '50px auto 0 auto',
	'padding': '7px',
	'border-radius': '5px'
});


var conTombol = document.querySelector('.container-tombol');
var inputLayar= document.querySelector('#layar');


conTombol.addEventListener('click', function(btn){
	
	let click = btn.target;
	let nilai = click.innerText;

	
	if(nilai == 'C'){
		inputLayar.value = "";
	}
	else if(nilai == '<='){
		inputLayar.value = inputLayar.value.slice(0, -1);
	}
	else if(nilai == '='){
		inputLayar.value = eval(inputLayar.value);
	}
	else{
		inputLayar.value = inputLayar.value + nilai;	
	}

});
