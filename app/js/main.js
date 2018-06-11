$(document).ready(function(){
	$(".ano").text((new Date).getFullYear());
});
function slide(sig){
	let historia= new Array();
	let pos=0;
	historia=['images/1.mp4','images/2.mp4'];
	pos=historia.indexOf($("video").children('source').attr("src"));
	switch(sig){
		case 0://prev
			if(historia[pos-1]){
				$("video").children('source').attr("src",historia[pos-1]);
			}
			else{
				pos=historia.length-1;
				$("video").children('source').attr("src",historia[pos]);
			}
			break;
		case 1://next
			if(historia[pos+1]){
				$("video").children('source').attr("src",historia[pos+1]);
			}
			else{
				pos=0;
				$("video").children('source').attr("src",historia[pos]);
			}
			break;
	}
	$("video")[0].load();
}