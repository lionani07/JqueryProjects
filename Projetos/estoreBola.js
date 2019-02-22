var total = 0;

function addBola(){
	var x = Math.floor(Math.random()*800);
	var y = Math.floor(Math.random()*500);
	var bola = $('<div class="bola"></div>');
	bola.css('left', x+'px');
	bola.css('top', y+'px');

	var aa = Math.floor(Math.random()*10);
	var bb = Math.floor(Math.random()*10);
	var cc = Math.floor(Math.random()*10);

	bola.css('background-color', '#'+aa+bb+cc);

	bola.on('click', function(){
		$(this).fadeOut();
		$('#placar').html(++total);
	})

	$(document.body).append(bola);

}

$(function(){

	var cantBola = 0;

	$('#start').on('click', function(){
		setInterval(addBola, 1000);
	})

	


});
