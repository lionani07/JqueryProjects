<?php

$dataInicio = new DateTime($_POST['dataInicio']);
$dataFim = new DateTime($_POST['dataFim']);

$tempo = $dataFim->diff($dataInicio);
echo $tempo->format('%R%a días');



 ?>