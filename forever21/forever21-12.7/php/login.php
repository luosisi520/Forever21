<?php
header("Content-type:text/html;charset=utf-8");
//接收参数
	$Name=$_GET['Name'];
	$pass=$_GET['pass'];

//连接数据库
$con=mysql_connect("localhost","root","root");
if(!$con){

}else{
	mysql_select_db("mysql1211",$con);



//执行
 $sqlStr="select * from forever21 where username='$Name' and userpass='$pass'"; 
 $result=mysql_query($sqlStr,$con);

 //关闭
 mysql_close($con);
 if(mysql_num_rows($result)==1){
 	echo "1";//登录成功
 }else{
 	echo "0";//用户名或密码不正确
 }
}
?>