<?php
    //if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    $SERVER = 'localhost';
    $USER = 'shop';
    $PASS = 'passgoeshere';
    $DATABASE = 'shop';
    
    $r = mysql_connect($SERVER, $USER, $PASS);
    
    if (!$r)
    {
        echo "Could not connect to MySql database.";
        exit;
    }
    
    mysql_select_db( $DATABASE );
    
    
    class Email{
        
        function get($id){
            $ret_array = array();
            $sql = "select id,email from EmailTable where id = '$id%'";
            $result = mysql_query($sql);
            
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['email'] = $data->email;
                $ret_array[] = $obj;
            }
            
            return $ret_array;
        }
        
        function get_all(){
            $ret_array = array();
            $sql = "select id,email from EmailTable";
            $result = mysql_query($sql);
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['email'] = $data->email;
                $ret_array[] = $obj;
            }
            
            return $ret_array;
            
        }
        
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
        
        function post($arguments){
            $id = array_shift($arguments);
            $ret_array = array();
            $sql = "insert into EmailTable (email) values('$arguments[0]')";
            $result = mysql_query($sql);
            $id = mysql_insert_id();
            return ($this -> get($id));
        }
    }
    
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
    
    class Product{
        function get($id){
            $ret_array = array();
            $sql = "select id,name,description,type,picture,price from ProductTable where id = '$id%'";
            $result = mysql_query($sql);
            
            while($data = mysql_fetch_object($result)){
                $obj['id'] = $data->id;
                $obj['name'] = $data->name;
                $obj['description'] = $data->description;
                $obj['type'] = $data->type;
                $obj['picture'] = $data->picture;
                $obj['price'] = $data->price;
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
                
                $ret_array[] = $obj;
            }
            
            return $ret_array;
            
        }
        
        function put($arguments){
            $id = array_shift($arguments);
            $this -> delete($id);
            
            $ret_array = array();
            $sql = "insert into ProductTable (id,name,description,type,picture,price) values('$id%','$arguments[0]','$arguments[1]','$arguments[2]', '$arguments[3]','$arguments[4]')";
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
            $sql = "insert into ProductTable (name,description,type,picture,price) values('$arguments[0]','$arguments[1]','$arguments[2]','$arguments[3]','$arguments[4]')";
            $result = mysql_query($sql);
            $id = mysql_insert_id();
            return ($this -> get($id));
        }
        
        
    }
    
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
    