<?php
    //if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    $SERVER = 'localhost';
    $USER = 'shop';
    $PASS = '$ilovecats$';
    $DATABASE = 'shop';
    
    $r = mysql_connect($SERVER, $USER, $PASS);
    
    if (!$r)
    {
        echo "Could not connect to MySql database.";
        exit;
    }
    
    mysql_select_db( $DATABASE );
    
    
    class Email{
        
        function get_email($id){
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
    }
    
    class Customer{
        function get_customer($id){
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
        
        
    }
    
    
    class News{
        function get_news($id){
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
    }
    
    class Product{
        function get_product($id){
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
    }
    
    class Order{
        function get_order($orderNumber){
            $ret_array = array();
            $sql = "select orderNumber, productId, quantity, customerId, status from OrdersTable where orderNumber = '$orderNumber%'";
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
    }
    
