window.onload=function(){
    //轮播图2
let currIndex = 0;
var myTimer = null;

function autoPlay(){	
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、改变数据（图片序号）
		let outIndex = currIndex;//要出去的那张。
		currIndex=currIndex+1;
		//2、边界处理
		if(currIndex>4 || currIndex<0){
			currIndex = 0;
		}
		//3、改变外观
		showImg(outIndex,currIndex);
	},5000);	
}
                   $("#five2").onclick=function(){
                       clearInterval(mytimer);
                       mytimer=null;
                       showImg(currindex);
                   }
//2、停止
function stop(){
	if(myTimer!=null){
		window.clearInterval(myTimer);
		myTimer = null;
	}
}

//3、跳转指定的图片
//
function goImg(transIndex){//2
	//1、改变数据（图片序号）
	let outIndex = currIndex;
	currIndex=transIndex;//2
	//2、边界处理
	if(currIndex>4 || currIndex<0){
		currIndex = 0;
	}
	//3、改变外观
	showImg(outIndex,currIndex);
}

//
//参数：
//outIndex:淡出的那张图片的序号
//inIndex:淡入的那张图片的序号
function showImg(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = $(".five")[0].children;
	imgs[inIndex].style.left = "1240px";
	//让inIndex滑入
	linearMove03(imgs[inIndex],"left",225,0,353);
	//让outIndex滑出
	linearMove03(imgs[outIndex],"left",0,-225,353);
	
	//2)、改豆豆
	let lis =$(".five")[0].lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "#888888";
	}
	lis[currIndex].style.backgroundColor = "#dddddd";
	
}

// window.onload = function(){
	//1、自动播放
	autoPlay();
	//2、鼠标放上，停止播放
	$(".five")[0].onmouseover = stop;

	//3、鼠标离开，继续播放
	$(".five")[0].onmouseout = autoPlay;
	
	//4、点击豆豆，跳转到对应图片
	let lis = $(".five")[0].lastElementChild.children;
	
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		lis[i].onclick = function(){
			goImg(parseInt(this.getAttribute("index")));
		};
    }
}