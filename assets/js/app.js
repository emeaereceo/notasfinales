// DECLARO OBJETO PARA GUARDAR REGISTROS
const registros = {
	nombre: '',
	carrera: '',
	ramo1: '',
	nota1ramo1: 0,
	nota2ramo1: 0,
	nota3ramo1: 0,
	ramo2: '',
	nota1ramo2: 0,
	nota2ramo2: 0,
	nota3ramo2: 0,
	ramo3: '',
	nota1ramo3: 0,
	nota2ramo3: 0,
};
// DECLARO ARREGLO PARA SOLICITUDES DINAMICAS
const solicitudes = [
	'Nombre Completo',
	'Carrera',
	'Ingresa nombre 1er asignatura',
	'Asignatura 1 Nota 1',
	'Asignatura 1 Nota 2',
	'Asignatura 1 Nota 3',
	'Ingresa nombre 2da asignatura',
	'Asignatura 2 Nota 1',
	'Asignatura 2 Nota 2',
	'Asignatura 2 Nota 3',
	'Ingresa nombre 3er asignatura',
	'Asignatura 3 Nota 1',
	'Asignatura 3 Nota 2',
];
// ACTIVO OPERACION AL ACTIVAR BOTON DE "INGRESAR REGISTRO"
const ingresarDatos = document.getElementById('btn-ingresar');
ingresarDatos.addEventListener('click', () => {
	// RECORRO MI OBJETO PARA INGRESAR DATOS, AL TIEMPO QUE GENERO LOS INPUTS
	cont = 0;
	for (const registro in registros) {
		let dato = prompt(solicitudes[cont]);
		registros[registro] = dato;
		// console.log(`${registro}: ${registros[registro]}`);
		cont++;
		// console.log(registro);
	}
	// CALCULO PRIMER PROMEDIO - PENDIENTE VALIDACIONES
	let promedio1 =
		(parseInt(registros.nota1ramo1) +
			parseInt(registros.nota2ramo1) +
			parseInt(registros.nota3ramo1)) /
		3;
	// CALCULO SEGUNDO PROMEDIO - PENDIENTE VALIDACIONES
	let promedio2 =
		(parseInt(registros.nota1ramo2) +
			parseInt(registros.nota2ramo2) +
			parseInt(registros.nota3ramo2)) /
		3;
	// ESTIMO EL PROMEDIO MINIMO PARA APROBAR
	let minimoAprobacion = (4 * 100) / 7;
	// CALCULO EL PROMEDIO ACTUAL SIN LA NOTA 3
	let promedio3 =
		(((parseInt(registros.nota1ramo3) + parseInt(registros.nota2ramo3)) / 3) *
			100) /
		7;
	// VARIABLES PARA IMPRIMIR LOS RESULTADOS
	let leyenda;
	let notaNecesaria;
	// CONDICIONO SI APRUEBA O LE FALTA NOTA
	if (promedio3 < minimoAprobacion) {
		notaNecesaria = (((minimoAprobacion - promedio3) * 7) / 100) * 3;
		leyenda =
			'Para aprobar el ramo de ' +
			registros.ramo3 +
			' con nota 4, necesitas obtener un ' +
			notaNecesaria.toFixed(2) +
			' en la nota 3';
	} else {
		leyenda = 'Felicidades, aprobaste ' + registros.ramo3;
	}

	// INCORPORO EL HTML CON LA TABLA
	contenido.innerHTML = `<div class="container py-5">
			<table class="table w-25 table-bordered">
				<tbody>
					<tr>
						<th class="table-dark">Nombre</th>
						<td>${registros.nombre}</td>
					</tr>
					<tr>
						<th class="table-dark">Carrera</th>
						<td>${registros.carrera}</td>
					</tr>
				</tbody>
			</table>
			<table class="table table-bordered">
				<thead class="table-dark">
					<tr>
						<th scope="col" class="text-center">Asignatura</th>
						<th scope="col" class="text-center">Nota 1</th>
						<th scope="col" class="text-center">Nota 2</th>
						<th scope="col" class="text-center">Nota 3</th>
						<th scope="col" class="text-center">Promedio</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>${registros.ramo1}</th>
						<td class="text-center">${registros.nota1ramo1}</td>
						<td class="text-center">${registros.nota2ramo1}</td>
						<td class="text-center">${registros.nota3ramo1}</td>
						<td class="text-center">${promedio1.toFixed(2)}</td>
					</tr>
					<tr>
						<th>${registros.ramo2}</th>
						<td class="text-center">${registros.nota1ramo2}</td>
						<td class="text-center">${registros.nota2ramo2}</td>
						<td class="text-center">${registros.nota3ramo2}</td>
						<td class="text-center">${promedio2.toFixed(2)}</td>
					</tr>
					<tr>
						<th>${registros.ramo3}</th>
						<td class="text-center">${registros.nota1ramo3}</td>
						<td class="text-center">${registros.nota2ramo3}</td>
						<td class="text-center">-</td>
						<td class="text-center">-</td>
					</tr>
				</tbody>
			</table>
			<p>${leyenda} .
		</div>`;
});
