//Author amo3

<?php
require '../../application/models/json_maker.php';
require '../../application/models/models.php';

//Constants
$API_START = 3;

$body = fopen("php://input", "r");
$body = fgets($body);
$body = json_decode($body);

//Get the method(PUT,GET,POST, DELETE)
//and the URI, and format nicely.
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


//Resource will contain what we are attempting to request/put
//For example, email, customer etc.
$resource = array_shift($params_array);
//echo $resource;


//Section below contains similar code for all different resources.
//Each resource formats the JSON string (or, if there is none, the
//raw URL) for the appropriate request, and then makes that call
//on the corresponding model.
//GET -> Request information.
//PUT -> Change information.
//POST -> Add a new entry.
//DELETE -> Delete entry.

//Email requests.
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


//Customer resource requests.
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


//News resource requests.
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


//order resource requests.
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

     if(!empty($body)){

       $params_array[0] = $body->id;
       $params_array[1] = $body->orderNumber;
       $params_array[2] = $body->productId;
       $params_array[3] = $body->quantity;
       $params_array[4] = $body->customerId;
       $params_array[5] = $body->status;
    }
    $JSON = new json_maker("Order","put",$params_array);
    echo $JSON->output;
  }

  elseif($method == 'delete'){
    $JSON = new json_maker("Order","delete",$id);
    echo $JSON->output;
  }

  elseif($method == 'post'){

    array_unshift($params_array, $id);

    if(!empty($body)){

      $params_array[0] = $body->id;
      $params_array[1] = $body->orderNumber;
      $params_array[2] = $body->productId;
      $params_array[3] = $body->quantity;
      $params_array[4] = $body->customerId;
      $params_array[5] = $body->status;
    }
    $JSON = new json_maker("Order","post",$params_array);
    echo $JSON->output;
  }

  else{

  }
}


//Product resource requests.
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
      $params_array[7] = $body->quantity;
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
      $params_array[7] = $body->quantity;
    }


    $JSON = new json_maker("Product","post",$params_array);
    echo $JSON->output;
  }

  else{

  }
}


//If nothing matches, return a 404 (maybe this should be a JSON string with
//a failure field or something.)
else
  {
    //header('HTTP/1.1 404 Not Found');
  }


?>