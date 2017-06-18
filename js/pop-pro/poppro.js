function createPopUp(popupbox,popuplink,hcenter,vcenter,recClass){
	$(popupbox).addClass("regularPopUp");
	if(recClass == true){
		$(popupbox).addClass("recPopUp");
	}
	$(popupbox).css("margin-left",(($(popupbox).width)/2)+"px");
	$(popupbox).css("margin-right",(($(popupbox).width)/2)+"px");
	$(popupbox).css("display","none");
	$(popuplink).click(function(){
		if($(popupbox).css("display")=="none"){
			$(popupbox).css("display","block");
			$(popupbox).css("margin-left",(((window.width-($(popupbox).width))/2)+"px"));
			$(popupbox).css("margin-right",(((window.width-($(popupbox).width))/2)+"px"));
		}
	});
}