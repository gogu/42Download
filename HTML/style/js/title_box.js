//titleBOX

$(function(){
	var $title,$text,$left,$right;
	
	$(".title_hover a").not(".def_hover").mouseover(function(){
		$(".tips").stop();
		$(".tips p").remove();
		
		$text=$(this).text();
		$title=$(this).attr("title");
		$(this).attr("title","");
		
		if ($text!="") $("<p>"+$text+"</p>").appendTo(".tip_name");
		if ($title!="") $("<p>"+$title+"</p>").appendTo(".tip_title");
		
		$(this).mousemove(function(e){
				$left=e.pageX+20;
				$right=e.pageY+10;
				$(".tips")
					.show()
					.css("left",$left).css("top",$right).css("opacity","0.8");
		});
	}).mouseout(function(){
		$(".tips").stop().animate({opacity:0},240,function(){
			$(".tips").hide();
		});
		
		$(this).attr("title",$title);
	});
});