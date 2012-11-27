<?php
    require '../../application/models/json_maker.php';
    require '../../application/models/models.php';
    
    //Constants
    $API_START = 3;
    
    $body = fopen("php://input", "r");
    $body = fgets($body);
    $body = json_decode($body);
    
    $method = strtolower($_SERVER['REQUEST_METHOD']);
    $params = strtolower($_SERVER['REQUEST_URI']);
    $params = explode("?",$params);
    $params = $params[0];
    
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
            if(empty($id)){
                $JSON = new json_maker("Email","get_all","");
                echo $JSON->output;
            }
            else{
                $JSON = new json_maker("Email","get",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                $params_array[0] = $body->id;
                $params_array[1] = $body->email;
            }
            
            $JSON = new json_maker("Email","put",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("Email","delete",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->email;
            }
            
            $JSON = new json_maker("Email","post",$params_array);
            echo $JSON->output;
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
                $JSON = new json_maker("Customer","get",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->name;
                $params_array[2] = $body->email;
                $params_array[3] = $body->address;
            }
            
            $JSON = new json_maker("Customer","put",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("Customer","delete",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->name;
                $params_array[2] = $body->email;
                $params_array[3] = $body->address;
            }
            
            $JSON = new json_maker("Customer","post",$params_array);
            echo $JSON->output;
        }
        
        else{
            
        }
    }
    
    elseif($resource == 'news'){
        $id = array_shift($params_array);
        
        if($method == 'get'){
            if(empty($id)){
                $JSON = new json_maker("News","get_all","");
                echo $JSON->output;
            }
            else{
                $JSON = new json_maker("News","get",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->news;
            }
            $JSON = new json_maker("News","put",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("News","delete",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->news;
            }
            
            $JSON = new json_maker("News","post",$params_array);
            echo $JSON->output;
        }
        
        else{
            
        }
    }
    
    elseif($resource == 'order'){
        $id = array_shift($params_array);
        
        if($method == 'get'){
            if(empty($id)){
                $JSON = new json_maker("Order","get_all","");
                echo $JSON->output;
            }
            else{
                $JSON = new json_maker("Order","get",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            $JSON = new json_maker("Order","put",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("Order","delete",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
            
            array_unshift($params_array, $id);
            $JSON = new json_maker("Order","post",$params_array);
            echo $JSON->output;
        }
        
        else{
            
        }
    }
    
    elseif($resource == 'product'){
        $id = array_shift($params_array);
        
        if($method == 'get'){
            if(empty($id)){
                $JSON = new json_maker("Product","get_all","");
                echo $JSON->output;
            }
            else{
                $JSON = new json_maker("Product","get",$id);
                echo $JSON->output;
            }
        }
        
        elseif($method == 'put'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->name;
                $params_array[3] = $body->description;
                $params_array[4] = $body->type;
                $params_array[5] = $body->picture;
                $params_array[6] = $body->price;
            }   
            
            $JSON = new json_maker("Product","put",$params_array);
            echo $JSON->output;
        }
        
        elseif($method == 'delete'){
            $JSON = new json_maker("Product","delete",$id);
            echo $JSON->output;
        }
        
        elseif($method == 'post'){
            array_unshift($params_array, $id);
            
            if(!empty($body)){
                
                $params_array[0] = $body->id;
                $params_array[1] = $body->name;
                $params_array[3] = $body->description;
                $params_array[4] = $body->type;
                $params_array[5] = $body->picture;
                $params_array[6] = $body->price;
            }
            
            
            $JSON = new json_maker("Product","post",$params_array);
            echo $JSON->output;
        }
        
        else{
            
        }
    }
    
    else
    {
        //header('HTTP/1.1 404 Not Found');
    }
    
    
    ?>