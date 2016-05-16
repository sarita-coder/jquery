$(document).ready(function(){
	$(".michi").click(todo);
	$("#submit").click(reset);
});
var i=0;
function todo(){
	escribir(this);
	encontrarGanador();
}
function escribir(elemento){
	i++;
	if(i%2==0){
		$(elemento).text("0");
	} else {
		$(elemento).text("X");
	}
	$(elemento).attr('disabled','disabled');
	//encontrarGanador();
};

function encontrarGanador(){
var x11=$("#1").text();
var x12=$("#2").text();
var x13=$("#3").text();
var x21=$("#4").text();
var x22=$("#5").text();
var x23=$("#6").text();
var x31=$("#7").text();
var x32=$("#8").text();
var x33=$("#9").text();

	if(i>=5){
		if(x11==x12 && x12==x13 && x11!=""){
			alert("Jugador "+x11+ " ha ganado");
		}
		else if(x21==x22 && x21==x23 && x21!=""){
			alert("Jugador "+x21+ " ha ganado");
		}
		else if(x31==x32 && x32==x33 && x31!=""){
			alert("Jugador "+x31+ " ha ganado");
		}
		else if(x11==x21 && x11==x31 && x11!=""){
			alert("Jugador "+x11+ " ha ganado");
		}
		else if(x12==x22 && x12==x32 && x12!=""){
			alert("Jugador "+x22+ " ha ganado");
		}
		else if(x13==x23 && x23==x33 && x33!=""){
			alert("Jugador "+x33+ " ha ganado");
		}
		else if(x11==x22 && x22==x33 && x31!=""){
			alert("Jugador "+x33+ " ha ganado");
		}
		else if(x13==x22 && x22==x31 && x13!=""){
			alert("Jugador "+x31+ " ha ganado");
		}
		else if(i==9){

			alert("Empate");

		}
	}
};
function reset(){
	$(".michi").html("");
	$(".michi").removeAttr('disabled');
	i=0;
}


