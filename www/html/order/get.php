<?php

    
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    

    
    $MODEL = "Order";
    $FUNCTION = "get_order";
    $PARAM = 1;
    
    $JSON = new json_maker($MODEL,$FUNCTION,$PARAM);
    echo $JSON->output;
    
    echo 'end';
?>