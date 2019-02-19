<?php

echo json_encode($_POST);

$('#form').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();

		$.ajax({
			type: 'post',
			url: 'ajax.php',
			dataType: 'json',
			data: data,
			success: function(json){
				alert(json.nome);
			}
		});

	});
 
?>