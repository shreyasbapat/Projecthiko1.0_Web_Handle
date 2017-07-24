jQuery(document).ready(function(){

	jQuery(".menu-trigger").click(function(){
	
		jQuery(".nav-menu").slideToggle(400, function(){
		
		jQuery(this).toggleClass("nav-expanded").css('display','');

});
});

});

src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"

$(document).ready(function(){
$('#myonoffswitch').click(function(){
var myonoffswitch=$('#myonoffswitch').val();
if ($("#myonoffswitch:checked").length == 0)
{
var a=myonoffswitch;
}
else
{
var a="off";
}

$.ajax({
type: "POST",
url: "ajax.php",
data: "value="+a ,
success: function(html){
$("#display").html(html).show();
}
});

});
});



$(document).ready( function(){
$(".cb-enable").click(function(){
var parent = $(this).parents('.switch');
$('.cb-disable',parent).removeClass('selected');
$(this).addClass('selected');
$('.checkbox',parent).attr('checked', true);
});
$(".cb-disable").click(function(){
var parent = $(this).parents('.switch');
$('.cb-enable',parent).removeClass('selected');
$(this).addClass('selected');
$('.checkbox',parent).attr('checked', false);
});
});
