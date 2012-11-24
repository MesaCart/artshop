<?php
    
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    
    
    $MODEL = "Product";
    $FUNCTION = "get_product";
    $PARAM = 1;
    
    $JSON = new json_maker($MODEL,$FUNCTION,$PARAM);
    echo $JSON->output;
?>