//aqui declarare las variables globales
var x;
let y;

function cambiarnombre() {
	//ejemplo de variable no local. alcance de funcion.
	document.getElementById("demo").innerHTML="hola mundo";
	
}
function sumarnum(){
	document.getElementById("sumar").innerHTML="8";
}
//Sumar Palabras
function sumar2(){
	var x=document.getElementById("cifra1").value;
	var y=document.getElementById("cifra2").value;
	var z=x+" "+y;
	document.getElementById("sumacifras").innerHTML=""+z;
}
function bucle(){
	for(var x=0; x<10; x++){
		document.getElementById("bucle").innerHTML=""+x;
	}
}
function bucle1(){
	for(let y=0; y<10; y++){
		document.getElementById("bucle1").innerHTML=""+y;
			alert(y);
	}
	if(y==9){
		alert("bien echo");
	}
	
}
//declararemos constante y las modificaremos
function Cambiar(){
	const Pi= new Number(3.14);
	var Resultado;
	var RadioC=new Number();
	RadioC=Number(document.getElementById("RadioC").value);
	Resultado=Pi*Math.pow(RadioC,2);
	document.getElementById("Respuesta").innerHTML=""+Resultado;
}
//sumar numeros
//la sumas siempren requieren la variable Numbre
//error de principiante
function sumar1(){
	var Sumando1=new Number(document.getElementById("cifra3").value);
	var Sumando2=new Number(document.getElementById("cifra4").value);
	var Respuesta2=new Number();
	const Error=new String("Escribe un numero Master");
	Respuesta2=Sumando1+Sumando2;
	document.getElementById("sumacifras2").innerHTML="Tu suma es "+Respuesta2;
}
//como realizaremos unas operaciones mat usare la variable Number
//momento prueba
//a copiar la tabla
function Operador(){
	var ValordeX=new Number(document.getElementById("ValorX").value);
	var OperadorX=new Number(document.getElementById("OperadorX").value);
	var Resultado=new Number();
	Resultado=ValordeX+OperadorX;
	document.getElementById="Respuesta2".innerHTML=""+Resultado;
}