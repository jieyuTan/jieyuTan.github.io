new_element = document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","EHandler.js");
document.body.appendChild(new_element);
function imgshow() {
	EHandler();
}

var images = ['images/anhei1.png','images/fengbao.png','images/lushi5.png','images/moshou3.png',
	'images/shouwang3.png','images/xingji.png'];	
	function nextImage(){
		var img = document.getElementById("slideimage");
		var imgname = img.name.split("_");
		var index = imgname[1];
		if (index == images.length - 1) {
			index = 0;
		} else {
			index++;
		}
		img.src = images[index];
		img.name = "image_" + index;
	}
	function prevImage(){
		var img = document.getElementById("slideimage");
		var imgname = img.name.split("_");
		var index = imgname[1];
		if (index == 0) {
			index = images.length - 1;
		} else {
			index--;
		}
		img.src = images[index];
		img.name = "image_" + index;
	}
	var nextbtn = document.getElementById("nextbtn");
	var prevbtn = document.getElementById("prevbtn");
	EHandler.add(nextbtn,"click",function() { nextImage(); });
	EHandler.add(prevbtn,"click",function() { prevImage(); });