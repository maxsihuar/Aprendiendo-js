function Start(){
	var BtnCambio = document.getElementById("cambio");
	BtnCambio.addEventListener("click", Cambiar);
}

function Cambiar(){
	var BtnCambio = document.getElementById("cambio");
	document.body.classList.toggle("oscuro");
	BtnCambio.classList.toggle("activo");
}

