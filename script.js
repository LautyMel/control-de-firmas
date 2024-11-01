// Array para almacenar los datos de las personas
let persons = [];

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
    // Agregar el objeto al array de personas
    persons.push(person);
    // Mostrar una alerta indicando que la persona fue cargada
    alert('Persona cargada con éxito');
    // Reiniciar el formulario
    document.getElementById('personForm').reset();
}

// Función para calcular las horas cumplidas entre el ingreso y el egreso
function calculateHours(ingreso, egreso) {
    // Dividir las horas y minutos de ingreso y egreso
    const [ingresoHours, ingresoMinutes] = ingreso.split(':').map(Number);
    const [egresoHours, egresoMinutes] = egreso.split(':').map(Number);

    // Crear objetos Date para ingreso y egreso
    const ingresoDate = new Date(0, 0, 0, ingresoHours, ingresoMinutes);
    const egresoDate = new Date(0, 0, 0, egresoHours, egresoMinutes);

    // Calcular la diferencia en horas
    let diff = (egresoDate - ingresoDate) / (1000 * 60 * 60); // Convertir milisegundos a horas
    if (diff < 0) diff += 24; // Manejar turnos nocturnos

    return diff.toFixed(2); // Devolver las horas con dos decimales
}

// Función para eliminar una persona del array
function removePerson() {
    // Obtener el CUIT de la persona a eliminar
    const cuit = document.getElementById('cuit').value;
    // Filtrar el array para eliminar la persona con el CUIT especificado
    persons = persons.filter(person => person.cuit !== cuit);
    // Mostrar una alerta indicando que la persona fue eliminada
    alert('Persona eliminada');
}

// Función para descargar el Excel completo
function downloadExcel() {
    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.book_new();
    // Agrupar las personas por mes
    const groupedByMonth = persons.reduce((acc, person) => {
        if (!acc[person.mes]) {
            acc[person.mes] = [];
        }
        acc[person.mes].push(person);
        return acc;
    }, {});

    // Crear una hoja de Excel para cada mes
    Object.keys(groupedByMonth).forEach(mes => {
        const ws = XLSX.utils.json_to_sheet(groupedByMonth[mes]);
        XLSX.utils.book_append_sheet(wb, ws, mes);
    });

    // Descargar el archivo Excel
    XLSX.writeFile(wb, "Planilla_Completa.xlsx");
}

// Función para mostrar el resumen de horas cumplidas
function showSummary() {
    const summaryDiv = document.getElementById('summary');
    // Agrupar y sumar las horas cumplidas por persona y mes
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

    // Generar el HTML para mostrar el resumen en una tabla
    summaryDiv.innerHTML = `
        <table>
            <tr>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>CUIT</th>
                <th>Mes</th>
                <th>Horas Cumplidas</th>
            </tr>
            ${summaryArray.map(person => `
                <tr>
                    <td>${person.apellido}</td>
                    <td>${person.nombre}</td>
                    <td>${person.cuit}</td>
                    <td>${person.mes}</td>
                    <td>${person.horas.toFixed(2)}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

// Función para descargar el resumen en un archivo Excel
function downloadSummaryExcel() {
    // Agrupar y sumar las horas cumplidas por persona y mes
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
    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.book_new();

    // Crear una hoja de Excel con el resumen para cada mes
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

    // Descargar el archivo Excel
    XLSX.writeFile(wb, "Resumen_Planilla.xlsx");
}
