
function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

window.onload=function(){
    function initUI(username){
        if(username!=null){
            $("#usernameSpan").innerHTML = username;
            $("#welcomeBox").style.display = "block";  
             $(".first3")[0].style.display = "none";  
        }
    }
    var username = getCookie("username");
    //2、初始化界面
    initUI(username);
    //3、注销
    $("#btnOut").onclick= function(){
        removeCookie("username");
        location.href="login.html";
    }

        var kk = $(".ulsi")[0].children;
        for(let i=0;i<kk.length;i++){
            kk[i].onmouseover = function(){
                for(let j=0;j<kk.length;j++){
                    kk[j].firstElementChild.style.color = "gray";
                    kk[i].firstElementChild.style.color = "black";
                }
                 
            }
            kk[i].onmouseout = function(){
                for(let j=0;i<kk.length;j++){
                    kk[j].firstElementChild.style.color = "black";
                }
            }
        }
        $(".pic2")[0].onmouseover=function(){
            $(".pic0")[0].style.display="block";
        }
      $(".pic2")[0].onmouseout=function(){
        $(".pic0")[0].style.display="none";
    }
    
    $(".fdj")[0].onclick=function(){
        $(".sou")[0].style.display="inline-block";
        this.style.display = "none";
    }
    $(".cha")[0].onclick=function(){
        $(".sou")[0].style.display="none";
        $(".fdj")[0].style.display = "inline-block";
    }
    
    //回到顶部
    
    var return_top = document.getElementById("return_top");
    var sTop;
    window.onscroll = function(){
        //sTop :滚动条距离顶部的距离数值
        sTop = document.body.scrollTop||document.documentElement.scrollTop;
        if(sTop>300){
            return_top.className = "return-top active";
        }else{
            return_top.className = "return-top";
        }
        if (sTop > 10) {
            $(".first")[0].style.position = "fixed";
            $(".first")[0].style.left = "0px";
            $(".first")[0].style.top = "0px";
            $(".first")[0].style.zIndex = "122121";
            $(".sencond")[0].style.position = "fixed";
            $(".sencond")[0].style.left = "0px";
            $(".sencond")[0].style.top = "42px";
            $(".sencond")[0].style.zIndex = "122121";
            $(".third1")[0].style.position = "fixed";
            $(".third1")[0].style.top = "125px";
            $(".third1")[0].style.backgroundColor = "rgba(255,255,255,.3)";
        } else{
            $(".first")[0].style.position = "relative";
            $(".sencond")[0].style.position = "relative";
            $(".sencond")[0].style.top = "0px";
            $(".third1")[0].style.position = "static";
            $(".third1")[0].style.top = "0px";
        }
    }
    
    return_top.onclick = function(){
        var termId = setInterval(function(){
            sTop-=50;
            if(sTop<=0){
    
                clearInterval(termId);
            }
            window.scrollTo(0,sTop);
    
        },50);       
    }
    }

    