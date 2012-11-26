<?php
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    
    //Constants
    $API_START = 3;
    
    
    $method = strtolower($_SERVER['REQUEST_METHOD']);
    $params = strtolower($_SERVER['REQUEST_URI']);
    
    $params_array = explode("/",$params);
    
    //echo print_r($params_array);
    //Shift array over 3 spaces
    array_shift($params_array);
    array_shift($params_array);
    array_shift($params_array);
    
    $resource = array_shift($params_array);
    //echo $resource;
    
    if($resource == 'email')
    {
        //deal with email here
    }
    elseif($resource == 'customer')
    {
        $id = array_shift($params_array);
        //customer
        if(empty($id)){
            $JSON = new json_maker("Customer","get_all","");
            echo $JSON->output;
        }
        else{
            $JSON = new json_maker("Customer","get_customer",$id);
            echo $JSON->output;
        }
    }
    else
    {
        //header('HTTP/1.1 404 Not Found');
    }
    
    
    ?>