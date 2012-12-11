<?php
    //if ( ! defined('BASEPATH')) exit('No direct script access allowed');
  //General connection info - Should be changed
  //to meet the specifications of the system.
  //Try not to push this to GIT if it's filled in with real info...
    $SERVER = 'localhost';
    $USER = 'shop';
    $PASS = 'enterpasshere';
    $DATABASE = 'shop';

    //Connect to mysql
    $r = mysql_connect($SERVER, $USER, $PASS);
    
    if (!$r)
    {
        echo "Could not connect to MySql database.";
        exit;
    } 
    
    mysql_select_db( $DATABASE );
    
//Email Class handles communication with EmailTable
//This class will be explained in detail.
//The other classes follow nearly identical patterns.
    class Email{
        
      //get function is called whenever GET requests are made
      //to api/api.php/get
        function get($id){
	  //make a return array and perform the sql query.
            $ret_array = array();
            $sql = "select id,email from EmailTable where id = '$id%'";
            $result = mysql_query($sql);

            //Fill key/value pairs for each value in the array, and return the result.
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['email'] = $data->email;
                $ret_array[] = $obj;
            }	
            
            return $ret_array;
    }
	//Get all gets all emails in table.
	function get_all(){
	  $ret_array = array();
	  $sql = "select id,email from EmailTable";
	  $result = mysql_query($sql);
	  
	  //Continuously get new entries and fill a dictionary with them
	  //until no entries left that match query.
	  while($data = mysql_fetch_object($result)){
	    $obj['id'] = $data->id;
	    $obj['email'] = $data->email;
	    $ret_array[] = $obj;
	  }

	  return $ret_array;
	    
	}
	
	//Put changes entry in table.
	function put($arguments){
	  $id = array_shift($arguments);
	  $this -> delete($id);
   
	  $ret_array = array();
	  $sql = "insert into EmailTable (id,email) values('$id%','$arguments[0]')";
	  $result = mysql_query($sql);
	  return $ret_array;
	}

	function delete($id){
	  $sql = "delete from EmailTable where id='$id%'";
	  $result = mysql_query($sql);
	  $ret_array = array();
	  $ret_array[] =  $result;
	  return $ret_array;
	}
	
	//Post adds a new entry into the table.
	//Called whenever POST is made on api/api.php/email
	//Data can be supplied and will be used during creation
	//However, id will be ignored.
	//Returns the new entry.
        function post($arguments){
          $id = array_shift($arguments);
          $ret_array = array();
          $sql = "insert into EmailTable (email) values('$arguments[0]')";
          $result = mysql_query($sql);
          $id = mysql_insert_id();
          return ($this -> get($id));
        }
}
    
//Customer class handles communication with CustomerTable
    class Customer{
        function get($id){
            $ret_array = array();
            $sql = "select id,name,email,address from CustomerTable where id = '$id%'";
            $result = mysql_query($sql);
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['name'] = $data->name;
                $obj['email'] = $data->email;
                $obj['address'] = $data->address;
                $ret_array[] = $obj;
            }
            
            return $ret_array;
        }

	function get_all(){
	  $ret_array = array();
            $sql = "select id,name,email,address from CustomerTable";
            $result = mysql_query($sql);

            while($data = mysql_fetch_object($result)){
	      $obj['id'] = $data->id;
	      $obj['name'] = $data->name;
	      $obj['email'] = $data->email;
	      $obj['address'] = $data->address;
	      $ret_array[] = $obj;
            }

            return $ret_array;	
	  
	}

	function put($arguments){
	  $id = array_shift($arguments);
	  $this -> delete($id);
   
	  $ret_array = array();
	  $sql = "insert into CustomerTable (id,name,email,address) values('$id%','$arguments[0]','$arguments[1]','$arguments[2]')";
	  $result = mysql_query($sql);
	  return $ret_array;
	}

	function delete($id){
	  $sql = "delete from CustomerTable where id='$id%'";
	  $result = mysql_query($sql);
	  $ret_array = array();
	  $ret_array[] =  $result;
	  return $ret_array;
	 
	}
	
	//add a record - id will be null
	function post($arguments){
          $id = array_shift($arguments);
	  $ret_array = array();
          $sql = "insert into CustomerTable (name,email,address) values('$arguments[0]','$arguments[1]','$arguments[2]')";
          $result = mysql_query($sql);
	  $id = mysql_insert_id();
	  return ($this -> get($id));
	}

        
    }
    
//News class handles communication with news table
    class News{
        function get($id){
            $ret_array = array();
            $sql = "select id,news from NewsTable where id = '$id%'";
            $result = mysql_query($sql);
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['news'] = $data->news;
                $ret_array[] = $obj;
            }
            
            return $ret_array;
        }

	function get_all(){
	  $ret_array = array();
	  $sql = "select id,news from NewsTable";
	  $result = mysql_query($sql);

	  while($data = mysql_fetch_object($result)){
	    $obj['id'] = $data->id;
	    $obj['news'] = $data->news;
	    $ret_array[] = $obj;
	  }

	  return $ret_array;
	    
	}

	function put($arguments){
	  $id = array_shift($arguments);
	  $this -> delete($id);
   
	  $ret_array = array();
	  $sql = "insert into NewsTable (id,news) values('$id%','$arguments[0]')";
	  $result = mysql_query($sql);
	  return $ret_array;
	}

	function delete($id){
	  $sql = "delete from NewsTable where id='$id%'";
	  $result = mysql_query($sql);
	  $ret_array = array();
	  $ret_array[] =  $result;
	  return $ret_array;
	}

	function post($arguments){
          $id = array_shift($arguments);
          $ret_array = array();
          $sql = "insert into NewsTable (news) values('$arguments[0]')";
          $result = mysql_query($sql);
          $id = mysql_insert_id();
          return ($this -> get($id));
        }
    }
    

//Product class handles communication with product table
    class Product{
        function get($id){
            $ret_array = array();
            $sql = "select id,name,description,type,picture,price,quantity from ProductTable where id = '$id%'";
            $result = mysql_query($sql);
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['name'] = $data->name;
                $obj['description'] = $data->description;
                $obj['type'] = $data->type;
                $obj['picture'] = $data->picture;
                $obj['price'] = $data->price;
		$obj['quantity'] = $data->quantity;
                $ret_array[] = $obj;
            }
            
            return $ret_array;
        }

	function get_all(){
	  $ret_array = array();
	  $sql = "select * from ProductTable";
	  $result = mysql_query($sql);

	  while($data = mysql_fetch_object($result)){
	    $obj['id'] = $data->id;
	    $obj['name'] = $data->name;
	    $obj['description'] = $data->description;
	    $obj['type'] = $data->type;
	    $obj['picture'] = $data->picture;
	    $obj['price'] = $data->price;
	    $obj['quantity'] = $data->quantity;
	    
	    $ret_array[] = $obj;
	  }

	  return $ret_array;
	    
	}

	function put($arguments){
	  $id = array_shift($arguments);
	  $this -> delete($id);
   
	  $ret_array = array();
	  $sql = "insert into ProductTable (id,name,description,type,picture,price,quantity) values('$id%','$arguments[0]','$arguments[1]','$arguments[2]', '$arguments[3]','$arguments[4]','$arguments[5]')";
	  $result = mysql_query($sql);
	  return $ret_array;
	}

	function delete($id){
	  $sql = "delete from ProductTable where id='$id%'";
	  $result = mysql_query($sql);
	  $ret_array = array();
	  $ret_array[] =  $result;
	  return $ret_array;
	}

        function post($arguments){
          $id = array_shift($arguments);
          $ret_array = array();
          $sql = "insert into ProductTable (name,description,type,picture,price,quantity) values('$arguments[0]','$arguments[1]','$arguments[2]','$arguments[3]','$arguments[4]','$arguments[5]')";
          $result = mysql_query($sql);
          $id = mysql_insert_id();
          return ($this -> get($id));
        }

        
    }
    
//Order class handles communication with orders table.
    class Order{
        function get($id){
            $ret_array = array();
            $sql = "select * from OrderTable where id = '$id%'";
            $result = mysql_query($sql);
            
            if (mysql_num_rows($result) > 0) {
                while($data = mysql_fetch_assoc($result)) {
                    $ret_array[] = array('data' => $data);
                }
	    } else {
                    return $ret_array;
                }
            
            return $ret_array;
        }

	function get_all(){
	  $ret_array = array();
	  $sql = "select * from OrderTable";
	  $result = mysql_query($sql);

	  while($data = mysql_fetch_object($result)){
	    $obj['orderNumber'] = $data->orderNumber;
	    $obj['productId'] = $data->productId;
	    $obj['quantity'] = $data->quantity;
	    $obj['customerId'] = $data->customerId;
	    $obj['status'] = $data->status;
	    $obj['id'] = $data->id;
	    $ret_array[] = $obj;
	  }

	  return $ret_array;
	    
	}

	function put($arguments){
	  $id = array_shift($arguments);
	  $this -> delete($id);
   
	  $ret_array = array();
	  $sql = "insert into OrderTable (id,orderNumber,productId,quantity,customerId,status) values('$id%','$arguments[0]','$arguments[1]','$arguments[2]','$arguments[3],'$arguments[4]')";
	  $result = mysql_query($sql);
	  return $ret_array;
	}

	function delete($id){
	  $sql = "delete from OrderTable where id='$id%'";
	  $result = mysql_query($sql);
	  $ret_array = array();
	  $ret_array[] =  $result;
	  return $ret_array;
	   
	}
    }

    
        
    
