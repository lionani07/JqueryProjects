$(function() {
	
	$('form').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		
		$.ajax({
			type: 'POST',
			url: 'horas.php',
			data: data,
			success: function(response){
				$('#resultado').html(response);
			},
			error: function(){
				console.log('Existem errores');
			}
		});
	});

	$('form').on('reset', function(){
		$('#resultado').html('');
	});

});