
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
$SERVER = '127.0.0.1';
$USER = 'shop';
$PASS = 'password';
$DATABASE = 'shop';


if (!($mylink = mysql_connect( $SERVER, $USER, $PASS)))
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
    
