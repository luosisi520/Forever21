/*功能:正则检测
参数:用户输入的值,
返回值: boolean值*/
function checkk(str,type){
	switch(type){
		case  "yspanN":
			var pattern=/^[A-Z][a-z][0-9]{8}$/;
			break;
		case  "bspanN":
			var pattern=/^[1-9][0-9]{5}$/;
			break;
		case  "ysspanN":
			var pattern=/(^[1-9])([0-9]{5,9})([/@])(\q\q)([\.])(\c\o\m)$/;
			break; 
		case "nspanN":
			var pattern=/^[1][0-9]{10}$/;
			break;
		case "mspanN":
			var pattern=/^[\w]{8,16}$/; 
			break;
		default:
			return;

	}
	return pattern.test(str);

}