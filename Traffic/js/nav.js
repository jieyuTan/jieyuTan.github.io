var divs=[];
	var divCnt = 5; //div 数量 
	for (var i=0; i < divCnt; i++) {
	   divs[i] = document.getElementById("content"+(i+1));
	}
	var selectedDiv = 0;
	function toggleDiv(){
	    selectedDiv++;
	    selectedDiv = selectedDiv % divCnt; 
	    for (var i=0; i < divCnt; i++) {
	       divs[i].style.display="none"; 
	    }
	    divs[selectedDiv].style.display="block"; 
	 }

	function tell1(){
		alert("答案是错误的，再仔细想想！");
		document.getElementById("img").style.display="block";
	}
	function demo1(){
		alert("恭喜你，回答正确！");
		document.getElementById("img").style.display="block";
	}
	function tell2(){
	   var video = document.getElementById("video1");
	   var p = document.getElementById("pull");
		if(video.style.display == 'none'){
			video.style.display = 'block';
			if(video.pause)
				video.play();
		}
		else{
				video.style.display = 'none';
				if(video1.play)
					video1.pause();
		}	
	}
	function tell3(){
		document.getElementById("nextvideo").style.display="block";
	}
	function tell4(){
		document.getElementById("finalvideo").style.display="block";
	}
