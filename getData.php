<?php
/*
JSON
*/
$content = '';
$id=filter_input(INPUT_POST,'id');
if(isset($_POST['func']))
{
    if($_POST['func']==='save_element' && isset($_POST['data']))
    {
        $content=filter_input(INPUT_POST,'data');
        $fp=fopen('test.html','w');
        fwrite($fp,$content);
        fclose($fp);

    }
}
var_dump($_POST);
