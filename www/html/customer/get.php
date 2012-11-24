<?php
    
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    
    
    $MODEL = "Customer";
    $FUNCTION = "get_customer";
    $PARAM = 1;
    
    $JSON = new json_maker($MODEL,$FUNCTION,$PARAM);
    echo $JSON->output;
    
?>