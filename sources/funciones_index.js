$(".dropdown-menu li a").click(function(){
	//$(this).parents(".btn-group").find('.cate1').text();
 	$(this).parents(".btn-group").find('.cate1').text($(this).text());
  	$(this).parents(".btn-group").find('.cate1').val($(this).text());
});

$(document).ready(function(){
    $("#submit").submit(function(){
		$("#formOut").toggle('slow', function(){});
		event.preventDefault();
    });
});

$("#login").click(function(){
	$(".botonLogin").remove();
	$(".botonReg").remove();
	$("#botones-user").append("<button>Mi AppBox</button>");
});