<?php
	//中文处理
	header("Content-type:text/html;charset=utf-8");

	//接收数据
	$userName=$_GET['userName'];
	$userpass=$_GET['userpass'];
	$usernum=$_GET['usernum'];

	//建立数据库连接
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
	     die(连接失败.mysql_error());
	}else{
		//选择数据库
	    mysql_select_db("mysql1211",$conn);



	//传输数据
	$sqlStr="insert into forever21(username, userpass,usernum) 
	         values('$userName','$userpass','$usernum')";
	$reult=mysql_query($sqlStr,$conn);
	//关闭
	mysql_close($conn);
	if($reult==1){
	   echo "保存成功!<a href='../login.html'>请登录</a>";
	}else{
		echo "保存失败!<a href='../login.html'>请重新输入</a>";
	}
	}
?>