$(function(){

	$('#submit').on('click', function(){

		var altura = $('#altura').val();
		var peso = $('#peso').val();

		peso = peso.replace(',', '.');
		altura = altura.replace(',', '.');

		var imc = peso / (altura*altura);

		imc  =  Math.round(imc * 100) / 100

		$('#result').html("IMC: " + imc + " kg/m2");

	});
	

});