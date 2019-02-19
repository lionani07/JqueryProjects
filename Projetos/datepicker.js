$(function(){

	var inputSelect;

	$('input').on('focus', function(){
		var posInput = $(this).offset();
		$('.card-footer').html('Left: ' + posInput.left + '::' + 'Top: ' + posInput.top +'::' +  'Width: ' + $(this).width());

		$('.div').css('left', posInput.left + $(this).width() + 40);
		$('.div').css('top', posInput.top);
		$('.div').show();
		inputSelect = $(this);

	});

	$('input').on('blur', function(){
		setTimeout(function(){
			$('.div').hide();
		}, 200);
			
	});

	$('.div button').on('click', function(){		
		var hora = $(this).html();
		inputSelect.val(hora);
	});

});