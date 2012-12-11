//Formats output into JSON
<?php
    class json_maker
    {
      //Start with a blank string
        var $output = '';
        
        function json_maker($model, $function, $arguments){
	  //Create the appropriate model
            $REQUEST = new $model;
	    //Make the request on that model
	    //Expects output to be dictionary of key value pairs
	    //for JSON formatting.
            $data = $REQUEST -> $function($arguments);
	    //Encode into JSON
            $this -> output = json_encode($data);
        }
    }
    
    ?>