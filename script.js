// script.js
let persons = [];

function addPerson() {
    const ingreso = document.getElementById('ingreso').value;
    const egreso = document.getElementById('egreso').value;
    const horasCumplidas = calculateHours(ingreso, egreso);

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
    persons.push(person);
    alert('Persona cargada');
    document.getElementById('personForm').reset(); // Reiniciar el formulario
}

function calculateHours(ingreso, egreso) {
    const [ingresoHours, ingresoMinutes] = ingreso.split(':').map(Number);
    const [egresoHours, egresoMinutes] = egreso.split(':').map(Number);

    const ingresoDate = new Date(0, 0, 0, ingresoHours, ingresoMinutes);
    const egresoDate = new Date(0, 0, 0, egresoHours, egresoMinutes);

    let diff = (egresoDate - ingresoDate) / (1000 * 60 * 60); // Convert milliseconds to hours
    if (diff < 0) diff += 24; // Handle overnight shifts

    return diff.toFixed(2); // Return hours with two decimal places
}

function removePerson() {
    const cuit = document.getElementById('cuit').value;
    persons = persons.filter(person => person.cuit !== cuit);
    alert('Persona eliminada');
}

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

    XLSX.writeFile(wb, "personas.xlsx");
}

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
        <button onclick="downloadSummaryExcel()">Descargar Resumen Excel</button>
    `;
}

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

    const summaryArray = Object.values(summaryData);
    const ws = XLSX.utils.json_to_sheet(summaryArray);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Resumen");
    XLSX.writeFile(wb, "resumen_personas.xlsx");
}
