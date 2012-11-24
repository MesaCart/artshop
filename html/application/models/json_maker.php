class json_maker
{
    var $output = '';
    
    function json_maker($model, $function, $arguments){
        $REQUEST = new $model;
        $data = $REQUEST -> $function($arguments);
        $this -> output = json_encode($data);
    }
}