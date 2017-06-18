function dropdownClick(button,section,animation,initialdisplay){
	if(initialdisplay==false){
		$(section).css("display","none");
	}
	if(animation==true){
		$(button).click(function(){
			$(section).slideToggle();
			// Replace slideToggle with your prefered animation (or your own function).
		});
	}else{
		$(button).click(function(){
			if($(section).css("display")=="none"){
				$(section).css("display","");
			}else{
				$(section).css("display","none");
			}
		});
	}
}
function dropdownHover(button,section,animation,initialdisplay){
	if(initialdisplay==false){
		$(section).css("display","none");
	}
	if(animation==true){
		$(button).hover(function(){
			$(section).slideToggle();
			// Replace slideToggle with your prefered animation (or your own function).
		});
	}else{
		$(button).hover(function(){
			if($(section).css("display")=="none"){
				$(section).css("display","");
			}else{
				$(section).css("display","none");
			}
		});
	}
}