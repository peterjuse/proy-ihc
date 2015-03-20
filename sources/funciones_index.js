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
	$("#botones-user").append("<div class='btn-group'><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><span class='glyphicon glyphicon-user blue'></span> Mi AppBox <span class='caret'></span></button><ul class='dropdown-menu' role='menu'></li><li><a href='ordenes.html'>Tus Ordenes</a></li><li><a href='perfil.html'>Tu Cuenta</a></li><li><a href='wishlist.html'>Lista de Deseos</a></li></ul></div>");
	$("#myModal1").remove();
});

$(".fa-times").click(function(){
	$(this).parent().remove();

});