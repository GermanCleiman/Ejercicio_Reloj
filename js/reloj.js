const mostrarReloj = () => {
	let fecha = new Date();
	let hr = formatoHora(fecha.getHours());
	let min = formatoHora(fecha.getMinutes());
	let seg = formatoHora(fecha.getSeconds());
	document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

	const meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"-Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	const dias = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miercoles",
		"Jueves",
		"Viernes",
		"Sabado",
	];
	let diaSemana = dias[fecha.getDay()];
	// esta variable contiene en array dias [ posicion dia semana]
	/**
     * let dia = fecha.getDate();
	let mesAnio = meses[fecha.getMonth()];
	document.getElementById(
		"fecha"
	).innerHTML = ` ${diaSemana} ${dia} ${mesAnio}`;
	*/
	let fechaTexto = `
    ${dias[fecha.getDay()]}, 
    ${fecha.getDate()} de 
    ${meses[fecha.getMonth()]} del 
    ${fecha.getFullYear()} `;

	document.getElementById("fecha").innerHTML = fechaTexto;
	/** animar al Id contenedor
	 * classList: trae el listado de clases del Id contenedor.
	 * toggle: es como un pulsador una vez prende , una apaga, cada vez que se
	 *              manda a llamar al Id contenedor.
	 */
	document.getElementById("contenedor").classList.toggle("animar");
};

const formatoHora = (horario) => {
	if (horario < 10) horario = "0" + horario;
	return horario;
};
setInterval(mostrarReloj, 1000);
