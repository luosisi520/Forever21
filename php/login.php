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
 $sqlStr="select * from forever21 where $Name='$Name' and pass='$pass'"; 
 $result=mysql_query($sqlStr,$con);

 //关闭
 mysql_close($con);
 if(mysql_num_rows($result)==0){
 	echo "登录成功，<a href='../index.html'>进入首页</a>";
 }else{
 	echo "亲，用户名或密码不正确！";
 }
}
?>