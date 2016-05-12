$(document).ready(function(){
	$(".michi").on('click',escribir);
});
var i=0;
function escribir(){
	i++;
	if(i%2==0){
		$(this).text("0");
	} else {
		$(this).text("X");
	}
	$(this).attr('disabled','disabled'); 
	

	if(i>=5){
		if($("#contenido:nth-child(1)").val==$("#contenido:nth-child(4)").val ||$("#contenido:nth-child(1)").val==$("#contenido:nth-child(7)").val){
				alert("ganaste");
		}
	}
};



