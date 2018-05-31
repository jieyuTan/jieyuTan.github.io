var cnt = 50;
var myc = document.getElementById("myc");
var c = document.getElementById("myc").getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;
var d = 100;  //鼠标的位置
myc.width = w;
myc.height = h;
window.onresize = function() {
	w = window.innerWidth;
	h = window.innerHeight;
	myc.width = w;
	myc.height = h;
}
function Circle() {}; //创建圆的母体
	Circle.prototype = {
		init: function() {
			this.x = random(0,w);
			this.y = random(0,h);
			this.r = random(0.5,20);
			this.color = Color();  //随机透明度
			this.dx = random(-2,2);  //x的变化量
			this.dy = random(0.5,2);
		} , //初始化，定义变量这是一个函数
		draw: function() {
			c.beginPath();//拿起画笔
			c.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
			c.strokeStyle = this.color;
			c.fillStyle = this.color;
			c.stroke();  //c.fill();填充颜色  stroke填充边
		},   //执行动作
		update: function() {
			this.x += this.dx;
			this.y += this.dy;
			if((this.x + this.r) > w || (this.x - this.r) < 0)
			this.dx = -this.dx;
			if((this.y + this.r) > h || (this.y - this.r) < 0)
			this.dy = -this.dy; 
			this.xD = (positionX - this.x) < 0 ? -1*(positionX-this.x):(positionX-this.x);
			this.yD = (positionY - this.y) < 0 ? -1*(positionY-this.y):(positionY-this.y);  //判断鼠标移动变量的大小
			if(this.xD<d&&this.yD) {
				if(this.r < 120)  //判断圆的半径大小，超出则不改变
				this.r += 1; //如果没有超出就让圆的半径增大
			}
			else if(this.r>10&&this.xD>d && this.yD>d){
				this.r -= 1;
				}
			this.draw();  //根据新生成的值调用draw的方法再重新画
		}  //每隔多长时间更新，修正x，y
	}

	function random(min,max) {
			return Math.random()*(max-min)+min;
	}
	function Color() {
			var r, g, b, a;
			r = Math.floor(random(0,255));
			g = Math.floor(random(0,255));
			b = Math.floor(random(0,255));
			a = Math.random();
			return 'rgba('+r+', '+g+', '+b+', '+a+')';
	}

    var cArry = [];  //存放小圆
	for (var i=0; i < cnt; i++) {  //随机位置，产生随机大小，随机颜色的圆
		var circle = new Circle();
		circle.init();  //x,y,r,color,dx,dy赋值
		circle.draw();
		cArry.push(circle);//存放到数组的尾部，不会将之前出现的数值替换掉
		
	}
	
	function move() {
		c.clearRect(0,0,w,h);  //清空画布
		for (var i=0; i < cnt; i++) {
		cArry[i].update();	
		}
	}
	var positionX,positionY;  //定义鼠标的当前位置
myc.onmousemove = function(e){  //鼠标移动时获取鼠标的位置
//var ev = ev||window.event;
//debugger;  //调制器
positionX = e.clientX;
positionY = e.clientY;//当鼠标在窗口中移动时改变坐标的位置
}
	setInterval("move()",30);// JavaScript Document