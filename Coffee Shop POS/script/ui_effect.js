$(document).ready(function(){
	
	$(".mTabBtns > Button").click(function(){ //toggle tab
		var tabName = "#" + $(this).data("tab-name");
		$(".menuCollapseGrp > div").hide();
		$(tabName).fadeIn();
	});
	$(".menuCollapseGrp > div > button").click(function(){
		var cBodyName = "#" + $(this).data("collapse-name");
		$(".menuCollapseGrp > div > div").hide();
		$(cBodyName).fadeIn();
	});
});