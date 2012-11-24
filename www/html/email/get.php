<?php
    echo 'init';
    
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    
    echo 'begin';
    
    $MODEL = "Email";
    $FUNCTION = "get_email";
    $PARAM = 1;
    
    $JSON = new json_maker($MODEL,$FUNCTION,$PARAM);
    echo $JSON->output;
    
    echo 'end';
?>