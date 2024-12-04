
const personas = JSON.parse(localStorage.getItem('personas')) ||[
    
];


// Array para almacenar los datos de las personas
let persons = [];

// Cargar las personas desde localStorage al inicio
function loadPersons() {
    const storedPersons = localStorage.getItem('persons');
    if (storedPersons) {
        persons = JSON.parse(storedPersons);
        showSummary(); // Mostrar el resumen si hay datos previamente almacenados
    }
}

// Función para mostrar sugerencias
function mostrarSugerencias(input, sugerencias, contenedor) {
    contenedor.innerHTML = ''; // Limpiar sugerencias anteriores
    if (!input.value) {
        contenedor.style.display = 'none'; // Ocultar sugerencias si no hay valor
        return;
    }

    const valorLower = input.value.toLowerCase();
    const filtrados = sugerencias.filter(persona => 
        persona.nombre.toLowerCase().includes(valorLower) || 
        persona.apellido.toLowerCase().includes(valorLower)
    );

    // Si no hay sugerencias, ocultamos el contenedor
    if (filtrados.length === 0) {
        contenedor.style.display = 'none';
    } else {
        contenedor.style.display = 'block'; // Mostrar las sugerencias
    }

    // Mostrar las sugerencias filtradas
    filtrados.forEach(elemento => {
        const div = document.createElement('div');
        div.classList.add('suggestion');
        div.textContent = `${elemento.nombre} ${elemento.apellido} - ${elemento.cuit} (${elemento.gerencia}, ${elemento.subgerencia})`;

        // Acción cuando se selecciona una sugerencia
        div.onclick = () => {
            completarCampos(elemento); // Completar campos del formulario
            contenedor.innerHTML = ''; // Limpiar sugerencias
            contenedor.style.display = 'none'; // Ocultar las sugerencias después de seleccionar una
        };

        contenedor.appendChild(div);
    });
}

// Cerrar las sugerencias cuando se haga clic fuera del campo de entrada
document.addEventListener('click', function(event) {
    const isClickInside = document.getElementById('nombre').contains(event.target) || 
                          document.getElementById('apellido').contains(event.target);

    if (!isClickInside) {
        document.getElementById('sugerenciasNombre').style.display = 'none';
        document.getElementById('sugerenciasApellido').style.display = 'none';
    }
});

document.getElementById('nombre').addEventListener('input', function() {
    mostrarSugerencias(this, personas, document.getElementById('sugerenciasNombre'));
});

document.getElementById('apellido').addEventListener('input', function() {
    mostrarSugerencias(this, personas, document.getElementById('sugerenciasApellido'));
});

// Función para convertir el texto a mayúsculas
function toUpperCaseInput(event) {
    event.target.value = event.target.value.toUpperCase();
}

//  eventos para convertir a mayúsculas en los campos de entrada
document.getElementById('nombre').addEventListener('input', toUpperCaseInput);
document.getElementById('apellido').addEventListener('input', toUpperCaseInput);
document.getElementById('gerencia').addEventListener('input', toUpperCaseInput);
document.getElementById('subgerencia').addEventListener('input', toUpperCaseInput);
document.getElementById('mes').addEventListener('input', toUpperCaseInput);
document.getElementById('observaciones').addEventListener('input', toUpperCaseInput);

// Función para completar los campos con los datos de la persona
function completarCampos(persona) {
    // Llenar los campos con los datos de la persona
    document.getElementById('nombre').value = persona.nombre;
    document.getElementById('apellido').value = persona.apellido;
    document.getElementById('cuit').value = persona.cuit;
    document.getElementById('gerencia').value = persona.gerencia;
    document.getElementById('subgerencia').value = persona.subgerencia;
    document.getElementById('fecha').value = persona.fecha;
    document.getElementById('ingreso').value = persona.ingreso;
    document.getElementById('egreso').value = persona.egreso;

    // Convertir todos los valores de los campos a mayúsculas
    document.getElementById('nombre').value = persona.nombre.toUpperCase();
    document.getElementById('apellido').value = persona.apellido.toUpperCase();
    document.getElementById('gerencia').value = persona.gerencia.toUpperCase();
    document.getElementById('subgerencia').value = persona.subgerencia.toUpperCase();
    document.getElementById('mes').value = persona.mes.toUpperCase();
    document.getElementById('observaciones').value = persona.observaciones.toUpperCase();
}

document.getElementById('nombre').addEventListener('input', function() {
    mostrarSugerencias(this, personas, document.getElementById('sugerenciasNombre'));
});

document.getElementById('apellido').addEventListener('input', function() {
    mostrarSugerencias(this, personas, document.getElementById('sugerenciasApellido'));
});
// Función para agregar una persona al array
function addPerson() {
    // Obtener los valores de los campos de ingreso y egreso
    const ingreso = document.getElementById('ingreso').value;
    const egreso = document.getElementById('egreso').value;

    // Calcular las horas cumplidas
    const horasCumplidas = calculateHours(ingreso, egreso);

    // Crear un objeto con los datos de la persona
    const person = {
        apellido: document.getElementById('apellido').value,
        nombre: document.getElementById('nombre').value,
        cuit: document.getElementById('cuit').value,
        gerencia: document.getElementById('gerencia').value,
        subgerencia: document.getElementById('subgerencia').value,
        mes: document.getElementById('mes').value,
        fecha: document.getElementById('fecha').value,
        ingreso: ingreso,
        egreso: egreso,
        horas: horasCumplidas,
        observaciones: document.getElementById('observaciones').value
    };
// Verificar si ya existe una persona con el mismo cuit y fecha
const existePerson = persons.find(p => p.cuit === person.cuit && p.fecha === person.fecha);

if (existePerson) {
    // Si existe, mostrar un error y detener la ejecución
    alert('Esta persona ya está registrada con esta fecha.');
    return; // No agregar la persona
}


    // Agregar el objeto al array de personas
    persons.push(person);

    // Actualizar localStorage
    localStorage.setItem('persons', JSON.stringify(persons));

    // Mostrar una alerta indicando que la persona fue cargada
    alert('Persona cargada con éxito');

    // Actualizar el resumen
    showSummary();

    // Reiniciar el formulario
    document.getElementById('personForm').reset();
}

// Función para calcular las horas cumplidas entre el ingreso y el egreso
function calculateHours(ingreso, egreso) {
    const [ingresoHours, ingresoMinutes] = ingreso.split(':').map(Number);
    const [egresoHours, egresoMinutes] = egreso.split(':').map(Number);

    const ingresoDate = new Date(0, 0, 0, ingresoHours, ingresoMinutes);
    const egresoDate = new Date(0, 0, 0, egresoHours, egresoMinutes);

    let diff = (egresoDate - ingresoDate) / (1000 * 60 * 60); // Convertir milisegundos a horas
    if (diff < 0) diff += 24; // Manejar turnos nocturnos

    return diff.toFixed(2); // Devolver las horas con dos decimales
}

// Función para eliminar una persona del array
function removePerson(cuit) {
    persons = persons.filter(person => person.cuit !== cuit);
    localStorage.setItem('persons', JSON.stringify(persons)); // Actualizar localStorage
    alert('Persona eliminada');
    showSummary();
}

// Llamar a la función de carga al inicio
loadPersons();

// Función para mostrar el resumen de horas cumplidas
function showSummary() {
    const summaryDiv = document.getElementById('summary');
    const summaryData = persons.reduce((acc, person) => {
        const key = `${person.cuit}-${person.mes}`;
        if (!acc[key]) {
            acc[key] = { ...person, horas: parseFloat(person.horas) };
        } else {
            acc[key].horas += parseFloat(person.horas);
        }
        return acc;
    }, {});

    const summaryArray = Object.values(summaryData);

    summaryDiv.innerHTML = `
        <table>
            <tr>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>CUIT</th>
                <th>Gerencia</th>
                <th>Subgerencia</th>
                <th>Mes</th>
                <th>Horas Cumplidas</th>
                <th>Eliminar</th>
            </tr>
            ${summaryArray.map(person => `
                <tr>
                    <td>${person.apellido}</td>
                    <td>${person.nombre}</td>
                    <td>${person.cuit}</td>
                    <td>${person.gerencia}</td>
                    <td>${person.subgerencia}</td>
                    <td>${person.mes}</td>
                    <td>${person.horas.toFixed(2)}</td>
                    <td><button onclick="removePerson('${person.cuit}')" style= " background-color: #eaeaea;  border: 1px solid black;">❌</button></td>
                </tr>
            `).join('')}
        </table>
    `;
}

// Función para descargar el Excel completo
function downloadExcel() {
    const wb = XLSX.utils.book_new();
    const groupedByMonth = persons.reduce((acc, person) => {
        if (!acc[person.mes]) {
            acc[person.mes] = [];
        }
        acc[person.mes].push(person);
        return acc;
    }, {});

    Object.keys(groupedByMonth).forEach(mes => {
        const ws = XLSX.utils.json_to_sheet(groupedByMonth[mes]);
        XLSX.utils.book_append_sheet(wb, ws, mes);
    });

    XLSX.writeFile(wb, "Planilla_Completa.xlsx");
}

// Función para descargar el resumen en un archivo Excel
function downloadSummaryExcel() {
    const summaryData = persons.reduce((acc, person) => {
        const key = `${person.cuit}-${person.mes}`;
        if (!acc[key]) {
            acc[key] = { ...person, horas: parseFloat(person.horas) };
        } else {
            acc[key].horas += parseFloat(person.horas);
        }
        return acc;
    }, {});

    const summaryArray = Object.values(summaryData).map(({ nombre, apellido, cuit, mes, horas }) => ({
        nombre,
        apellido,
        cuit,
        mes,
        horas
    }));

    const wb = XLSX.utils.book_new();
    const groupedByMonth = summaryArray.reduce((acc, person) => {
        if (!acc[person.mes]) {
            acc[person.mes] = [];
        }
        acc[person.mes].push({
            nombre: person.nombre,
            apellido: person.apellido,
            cuit: person.cuit,
            mes: person.mes,
            horas: person.horas
        });
        return acc;
    }, {});

    Object.keys(groupedByMonth).forEach(mes => {
        const ws = XLSX.utils.json_to_sheet(groupedByMonth[mes]);
        XLSX.utils.book_append_sheet(wb, ws, mes);
    });

    XLSX.writeFile(wb, "Resumen_Planilla.xlsx");
}
