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
        $id = array_shift($params_array);
        
        if($method == 'get'){
        }
        
        elseif($method == 'put'){
        }
        
        elseif($method == 'delete'){
        }
        
        elseif($method == 'post'){
        }
        
        else{
        }
        
    }
    
    
    elseif($resource == 'customer')
    {
        $id = array_shift($params_array);
        
        if($method == 'get'){
            if(empty($id)){
                $JSON = new json_maker("Customer","get_all","");
                echo $JSON->output;
            }
            else{
                $JSON = new json_maker("Customer","get_customer",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            $JSON = new json_maker("Customer","put_customer",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("Customer","delete_customer",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
        }
        
        else{
        }  
        
    }
    
    elseif($resource == 'news'){
        
    }
    
    elseif($resource == 'order'){
        
    }
    
    elseif($resource == 'product'){
        
    }
    
    else
    {
        //header('HTTP/1.1 404 Not Found');
    }
    
    
    ?>