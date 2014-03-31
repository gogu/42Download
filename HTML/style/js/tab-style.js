/* tab标签 - index.html */

//hot_tab

$(function(){
	var $beginner=$(".here_focus");
	
	$(".tab_box li").click(function(){
		$beginner.removeClass("here_focus");
		$beginner.parent().next().hide();
		
		$(this).children(".tab_list").show();
		$(this).children("h3").children("a").addClass("here_focus");
		
		var $index=$(this).index();
		if ($index==0){
			$(".first_h3").css("borderLeftColor","#cdcdcd");
		}else{
			$(".first_h3").css("borderLeftColor","#f9f7f8");
		}
		
		$beginner=$(".here_focus");
	});
});
//-------------------------------------//

//rank_list

$(function(){
	$(".rank_main h3").mouseover(function(){
		$pos=$(this).position();
		$(this).parents("ul").children(".tab_h3_bg").stop().animate({left:$pos.left},150,'swing');
	});
	
	$(".rank_main li").mouseover(function(){
		$(this).prevAll().children(".rank_list").hide();
		$(this).nextAll().children(".rank_list").hide();
		$(this).children(".rank_list").show();
	});
});
//--------------------------------------//