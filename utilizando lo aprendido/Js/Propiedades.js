var Marcao="x";
var Marcax="o";
var Cuadro1=document.getElementById("cuadro-1");
var Cuadro2=document.getElementById("cuadro-2");
var Cuadro3=document.getElementById("cuadro-3");
var Cuadro4=document.getElementById("cuadro-4");
var Cuadro5=document.getElementById("cuadro-5");
var Cuadro6=document.getElementById("cuadro-6");
var Cuadro7=document.getElementById("cuadro-7");
var Cuadro8=document.getElementById("cuadro-8");
var Cuadro9=document.getElementById("cuadro-9");
var Comprobar1=false;
var Comprobar2=false;
var Comprobar3=false;
var Comprobar4=false;
var Comprobar5=false;
var Comprobar6=false;
var Comprobar7=false;
var Comprobar8=false;
var Comprobar9=false;
var FinDelJuego=false;

function cuadro1x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-1").innerHTML=Marcao;
	document.getElementById("casillao1").innerHTML="lleno";
	document.getElementById("casillao1").style.color="#FF0000";
	Comprobar1=true;
}
function cuadro1o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-1").innerHTML=Marcax;
	document.getElementById("casillax1").innerHTML="lleno";
	document.getElementById("casillax1").style.color="#FF0000";
	Comprobar1=true;
}
function cuadro2x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-2").innerHTML=Marcao;
	document.getElementById("casillao2").innerHTML="lleno";
	document.getElementById("casillao2").style.color="#FF0000";
	Comprobar2=true;
}
function cuadro2o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-2").innerHTML=Marcax;
	document.getElementById("casillax2").innerHTML="lleno";
	document.getElementById("casillax2").style.color="#FF0000";
	Comprobar2=true;
}
function cuadro3x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-3").innerHTML=Marcao;
	document.getElementById("casillao3").innerHTML="lleno";
	document.getElementById("casillao3").style.color="#FF0000";
	Comprobar3=true;
}
function cuadro3o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-3").innerHTML=Marcax;
	document.getElementById("casillax3").innerHTML="lleno";
	document.getElementById("casillax3").style.color="#FF0000";
	Comprobar3=true;
}
function cuadro4x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-4").innerHTML=Marcao;
	document.getElementById("casillao4").innerHTML="lleno";
	document.getElementById("casillao4").style.color="#FF0000";
	Comprobar4=true;
}
function cuadro4o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-4").innerHTML=Marcax;
	document.getElementById("casillax4").innerHTML="lleno";
	document.getElementById("casillax4").style.color="#FF0000";
	Comprobar4=true;
}
function cuadro5x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-5").innerHTML=Marcao;
	document.getElementById("casillao5").innerHTML="lleno";
	document.getElementById("casillao5").style.color="#FF0000";
	Comprobar5=true;
}
function cuadro5o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-5").innerHTML=Marcax;
	document.getElementById("casillax5").innerHTML="lleno";
	document.getElementById("casillax5").style.color="#FF0000";
	Comprobar5=true;
}
function cuadro6x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-6").innerHTML=Marcao;
	document.getElementById("casillao6").innerHTML="lleno";
	document.getElementById("casillao6").style.color="#FF0000";
	Comprobar6=true;
}
function cuadro6o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-6").innerHTML=Marcax;
	document.getElementById("casillax6").innerHTML="lleno";
	document.getElementById("casillax6").style.color="#FF0000";
	Comprobar6=true;
}
function cuadro7x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-7").innerHTML=Marcao;
	document.getElementById("casillao7").innerHTML="lleno";
	document.getElementById("casillao7").style.color="#FF0000";
	Comprobar7=true;
}
function cuadro7o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-7").innerHTML=Marcax;
	document.getElementById("casillax7").innerHTML="lleno";
	document.getElementById("casillax7").style.color="#FF0000";
	Comprobar7=true;
}
function cuadro8x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-8").innerHTML=Marcao;
	document.getElementById("casillao8").innerHTML="lleno";
	document.getElementById("casillao8").style.color="#FF0000";
	Comprobar8=true;
}
function cuadro8o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-8").innerHTML=Marcax;
	document.getElementById("casillax8").innerHTML="lleno";
	document.getElementById("casillax8").style.color="#FF0000";
	Comprobar8=true;
}
function cuadro9x(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-9").innerHTML=Marcao;
	document.getElementById("casillao9").innerHTML="lleno";
	document.getElementById("casillao9").style.color="#FF0000";
	Comprobar9=true;
}
function cuadro9o(){
	if(FinDelJuego==true)return;
	document.getElementById("cuadro-9").innerHTML=Marcax;
	document.getElementById("casillax9").innerHTML="lleno";
	document.getElementById("casillax9").style.color="#FF0000";
	Comprobar9=true;
}
function comprobar(){
	if(Comprobar1==true && Comprobar2==true && Comprobar3==true){
		alert("gano la x");
		FinDelJuego=true;
	}
	if(Comprobar4==true && Comprobar5==true && Comprobar6){
		alert("gano la x");
		FinDelJuego=true;
	}
	if(Comprobar7=true && Comprobar8==true && Comprobar9==true){
		alert("gano la x");
		FinDelJuego=true;
	}
	if(Comprobar1==true && Comprobar5==true && Comprobar9==true){
		alert("gano la x");
		FinDelJuego=true;
	}
	if(Comprobar3==true && Comprobar5==true && Comprobar7==true){
		alert("gano la x");
		FinDelJuego=true;
	}
	if(Comprobar2==true && Comprobar5==true && Comprobar8==true){
		alert("gano la x");
		FinDelJuego=true;
	}
}