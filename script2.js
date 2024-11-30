const personas = JSON.parse(localStorage.getItem('personas')) || [];

function renderTable() {
    const table = document.getElementById('personasTable');
    table.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>CUIT</th><th>Gerencia</th><th>Subgerencia</th><th>Acciones</th></tr>';
    personas.forEach((persona, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = persona.nombre;
        row.insertCell(1).innerText = persona.apellido;
        row.insertCell(2).innerText = persona.cuit;
        row.insertCell(3).innerText = persona.gerencia;
        row.insertCell(4).innerText = persona.subgerencia;
        const actions = row.insertCell(5);
        actions.innerHTML = `<button class="button" onclick="editPersona(${index})">Editar</button> <button class="button" onclick="deletePersona(${index})">Eliminar</button>`;
    });
}

function addPersona() {
    const nombre = prompt('Ingresar Nombre del Contratado:').toUpperCase();
    const apellido = prompt('Ingresar Apellido del Contratado:').toUpperCase();
    let cuit = prompt('Ingresar CUIT del Contratado:').replace(/[^0-9]/g, '');
    while(cuit.length !== 11) {
        cuit = prompt('CUIT Invalido. Por favor, ingrese un CUIT de 11 digitos:', cuit).replace(/[^0-9]/g, '');
    } 

    // Mostrar el modal para elegir Gerencia y Subgerencia
    document.getElementById('selectModal').style.display = 'flex';

    // Guardar temporalmente la persona sin Gerencia ni Subgerencia
    personas.push({ nombre, apellido, cuit, gerencia: "", subgerencia: "" });
    localStorage.setItem('personas', JSON.stringify(personas));
}

function guardarPersona() {
    // Obtener los valores seleccionados de los select
    const gerencia = document.getElementById('gerencia').value;
    const subgerencia = document.getElementById('subgerencia').value;

    // Obtener el último registro añadido
    const persona = personas[personas.length - 1];

    // Actualizar los valores de Gerencia y Subgerencia
    persona.gerencia = gerencia;
    persona.subgerencia = subgerencia;

    // Guardar la persona actualizada en localStorage
    localStorage.setItem('personas', JSON.stringify(personas));

    // Cerrar el modal y renderizar la tabla nuevamente
    cerrarModal();
    renderTable();
}

function cerrarModal() {
    document.getElementById('selectModal').style.display = 'none';
}
function editPersona(index) {
    const persona = personas[index];
    persona.nombre = prompt('Nombre:', persona.nombre).toUpperCase();
    persona.apellido = prompt('Apellido:', persona.apellido).toUpperCase();
    persona.cuit = prompt('CUIT:', persona.cuit).replace(/[^0-9]/g, '');
    while(persona.cuit.length !== 11) {
        persona.cuit = prompt('CUIT Invalido. Por favor, ingrese un CUIT de 11 digitos:', persona.cuit).replace(/[^0-9]/g, '');
    }
    // Mostrar el modal para elegir Gerencia y Subgerencia
    document.getElementById('selectModal').style.display = 'flex';

    // Pre-cargar las opciones de Gerencia y Subgerencia actuales
    document.getElementById('gerencia').value = persona.gerencia || "";
    document.getElementById('subgerencia').value = persona.subgerencia || "";

    // Guardar temporalmente el índice de la persona que estamos editando
    // Esto se usará más tarde para actualizar esa persona con las opciones elegidas
    window.editarIndex = index;
}

function guardarPersonaEditada() {
    const gerencia = document.getElementById('gerencia').value;
    const subgerencia = document.getElementById('subgerencia').value;

    // Obtener la persona que estamos editando
    const persona = personas[window.editarIndex];

    // Actualizar los valores de Gerencia y Subgerencia
    persona.gerencia = gerencia;
    persona.subgerencia = subgerencia;

    // Guardar la persona actualizada en localStorage
    localStorage.setItem('personas', JSON.stringify(personas));

    // Cerrar el modal y renderizar la tabla nuevamente
    cerrarModal();
    renderTable();
}



function deletePersona(index) {
    if (confirm('¿Estás seguro de que deseas eliminar esta persona?')) {
        personas.splice(index, 1);
        localStorage.setItem('personas', JSON.stringify(personas));
        renderTable();
    }
}

window.onload = renderTable;
