const btnSwitch = document.querySelector("#cambio");
function Cambiar(){
	document.body.innerHTML('class="oscuro"');
	btnSwitch.classList.toggle('activo');
}

