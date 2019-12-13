new_element = document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","jquery-3.2.1.js");
document.body.appendChild(new_element);
function introduce() {
	jquery();
}
$(document).ready(function() {
		$('#divs').mouseover(function(){
			$('#divs').css("background-color","#9ea6b9");
  			$("#apDiv3").show();
        });
		$('#divs').mouseout(function(){
			$('#divs').css("background-color","transparent");
  			$("#apDiv3").hide();

        });
		
		$('#diva').mouseover(function(){
			$('#diva').css("background-color","#9ea6b9");
  			$("#apDiv4").show();
        });
		$('#diva').mouseout(function(){
			$('#diva').css("background-color","transparent");
  			$("#apDiv4").hide();
        });
		
		$('#divb').mouseover(function(){
			$('#divb').css("background-color","#9ea6b9");
  			$("#apDiv6").show();
        });
		$('#divb').mouseout(function(){
			$('#divb').css("background-color","transparent");
  			$("#apDiv6").hide();
        });
		
		$('#divc').mouseover(function(){
			$('#divc').css("background-color","#9ea6b9");
  			$("#apDiv7").show();
        });
		$('#divc').mouseout(function(){
			$('#divc').css("background-color","transparent");
  			$("#apDiv7").hide();
        });
		
		$('#divf').mouseover(function(){
			$('#divf').css("background-color","#9ea6b9");
  			$("#apDiv8").show();
        });
		$('#divf').mouseout(function(){
			$('#divf').css("background-color","transparent");
  			$("#apDiv8").hide();
        });
		
		$('#dive').mouseover(function(){
			$('#dive').css("background-color","#9ea6b9");
  			$("#apDiv9").show();
        });
		$('#dive').mouseout(function(){
			$('#dive').css("background-color","transparent");
  			$("#apDiv9").hide();
        });
	});
