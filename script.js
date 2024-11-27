const personas = JSON.parse(localStorage.getItem('personas')) ||[
    { nombre: 'MARIA CELESTE', apellido: 'ALEANDRO', cuit: '27443662524', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'RODRIGO EMANUEL', apellido: 'ALMONACID', cuit: '20326976092', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'ALEJANDRO JOSE', apellido: 'AREAL', cuit: '20236699987', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'LEONEL', apellido: 'ARFUSO', cuit: '20426577012', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'SILVINA BEATRIZ', apellido: 'ARGENTO', cuit: '27201854127', gerencia: 'G.O PLANIFICAION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'IGNACIO', apellido: 'ARIAS', cuit: '20359721324', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'MAXIMO', apellido: 'ATENCIO GARCIA', cuit: '20445963810', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'VICTORIO', apellido: 'BALDINO REINOSO', cuit: '20926532694', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'SEBASTIAN DANIEL ', apellido: 'BARTUCCI', cuit: '20277381614', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'JORGE ALBERTO', apellido: 'BASSINO', cuit: '20085850750', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'ROMINA ELIZABETH', apellido: 'BAYARRES', cuit: '27402885047', gerencia: 'DIRECCION GENERAL', subgerencia: 'DIRECCION GENERAL' },
    { nombre: 'LAUTARO GUIDO', apellido: 'BELVISI', cuit: '20412050879', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'NADIA', apellido: 'BERMEJO', cuit: '27399086057', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'ANA CORINA', apellido: 'BERMUDEZ', cuit: '27255599378', gerencia: 'UNIDAD DE AUDITORIA INTERNA', subgerencia: 'UNIDAD DE AUDITORIA INTERNA' },
    { nombre: 'VALENTIN', apellido: 'BIDART', cuit: '20438147897', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA COMPRAS Y CONTRATACIONES' },
    { nombre: 'NORBERTO GASTON', apellido: 'BOGADO', cuit: '20284778007', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA COMPRAS Y CONTRATACIONES' },
    { nombre: 'IARA SOLANGE ', apellido: 'BOGARIN', cuit: '27348152322', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'RODRIGO ', apellido: 'BOTANA', cuit: '20325326140', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'DIEGO LEANDRO', apellido: 'BREY', cuit: '20251218278', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'DAMIAN GASTÓN', apellido: 'CABRERA', cuit: '20254262456', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'PEDRO', apellido: 'CACHEROSKY', cuit: '20438757407', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'AGUSTIN', apellido: 'CAFFARELLO', cuit: '20417778404', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA CONTABILIDAD Y PATRIMONIO' },
    { nombre: 'CAMILA', apellido: 'CAGLIOLO', cuit: '27326385633', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'SOFIA MARTINA', apellido: 'CAMPAGNA', cuit: '23454793064', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'JULIO CARLOS', apellido: 'CAPPELLA', cuit: '20259966540', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'GONZALO MARTIN', apellido: 'CARDOZO', cuit: '20406438504', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'IVAN', apellido: 'CAROSELLA', cuit: '20424264246', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'CHRISTIAN AREIL', apellido: 'CARREYRA', cuit: '20249627705', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'MARCELO', apellido: 'CASTELLANO', cuit: '20119885664', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'EZEQUIEL', apellido: 'CATALDI', cuit: '20430808169', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'MAGALI', apellido: 'CHIARELLI', cuit: '27344884248', gerencia: 'DIRECCION GENERAL', subgerencia: 'DIRECCION GENERAL' },
    { nombre: 'MARIA FLORENCIA', apellido: 'CHIORA', cuit: '27320471600', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'ARIADNA SOL ', apellido: 'CIVETTA', cuit: '27429524240', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA GEORREFERENCIACION Y SISTEMAS DE INFORMACIÓN' },
    { nombre: 'MARTIN', apellido: 'CORONEL', cuit: '20254312763', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'AREIL HERNAN', apellido: 'CUDA', cuit: '20306648447', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: ' GENARO', apellido: 'DE SIMONE', cuit: '20103877572', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'MATEO', apellido: 'DE VITO ', cuit: '20407455054', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'ENRIQUE NEHUEN', apellido: 'DI PALMA', cuit: '20295024594', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'IAN', apellido: 'ESCALERA ', cuit: '20406736076', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'LUCAS DANIEL', apellido: 'ESPINOS', cuit: '20428224486', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'SOFIA BELEN', apellido: 'ESPINOS ', cuit: '27456899159', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'MALENA', apellido: 'FEIJOO', cuit: '27472942439', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'EZEQUIEL OMAR', apellido: 'FIGUEREDO ', cuit: '20345332619', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'ANABELLA PAOLA', apellido: ' FRANCO', cuit: '27353743592', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'LAUTARO TOMAS', apellido: 'FUENTE ', cuit: '20382584385', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA RECLAMOS' },
    { nombre: 'CRISTINA LIDIA', apellido: 'GALISTEO', cuit: '27183000964', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'MANUEL HORACIO', apellido: 'GAMIZO ', cuit: '20140965910', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'MARIA LAURA', apellido: 'GERONIMO', cuit: '27236893834', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'SERGIO', apellido: 'GIGLIO ', cuit: '20339351539', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA CERTIFICACIONES' },
    { nombre: 'AUGUSTO OSCAR', apellido: 'GIMENEZ', cuit: '20141897102', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'ASTOR', apellido: 'GIRALDO ', cuit: '20431741904', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'KIARA', apellido: 'GOITIA', cuit: '27438200822', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'PABLO DARIO', apellido: 'GONZALEZ GARCETE ', cuit: '20276607341', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'G.O SOPORTE ADMINISTRATIVO' },
    { nombre: 'DIEGO FABIAN', apellido: 'GONZALEZ', cuit: '20390627115', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'GASTON ALEJANDRO', apellido: 'GONZALEZ ', cuit: '20382417888', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'EZEQUIEL', apellido: 'GRAGLOWSKI', cuit: '20352462579', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'MICAELA', apellido: 'GUIRAO ', cuit: '27420138771', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'LOURDES', apellido: 'HERRERO CORIA', cuit: '27449405728', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'MARTIN', apellido: 'HERRERO ', cuit: '20422359843', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'PILAR', apellido: 'HERRERO', cuit: '23392918574', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'MAITE', apellido: 'IGLESIAS ', cuit: '27429077333', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA RECURSOS HUMANOS' },
    { nombre: 'ALBERTINA', apellido: 'IMAS', cuit: '27413944193', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'LUIS JERONIMO', apellido: 'ITURRALDE ', cuit: '20114004236', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'DANTE NICOLAS', apellido: 'JUIZ', cuit: '20441282568', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'JORGE LUIS', apellido: 'KOBELINSKI ', cuit: '20082066145', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'PABLO FABIÁN', apellido: 'LAIÑO', cuit: '20323183482', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'ROMINA', apellido: 'LALIA ', cuit: '23367268964', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'SUBGERENCIA OPERATIVA MANTENIMIENTO DE PUENTES' },
    { nombre: 'HUGO FRANCISCO', apellido: 'LAMBERT', cuit: '23104921299', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA SEÑALAMIENTO HORIZONTAL' },
    { nombre: 'FEDERICO ANDRES', apellido: 'LASEIRAS ', cuit: '20275938999', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA COMPRAS Y CONTRATACIONES' },
    { nombre: 'ANA LUZ', apellido: 'LLAMPA', cuit: '24396796755', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'JORGE', apellido: 'LOPEZ ', cuit: '20244977953', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA DE EMERGENCIAS' },
    { nombre: 'GABRIEL ALEJANDRO', apellido: 'LOZANO SAN MARTIN', cuit: '20459269003', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'GUILLERMO FABIAN', apellido: 'MARESCA ', cuit: '20205682806', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA CONTABILIDAD Y PATRIMONIO' },
    { nombre: 'MILAGROS LUCIA', apellido: 'MARTINS', cuit: '27432626895', gerencia: 'DIRECCION GENERAL', subgerencia: 'DIRECCION GENERAL' },
    { nombre: 'LAUTARO', apellido: 'MELGAREJO ', cuit: '20453243215', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA CONTABILIDAD Y PATRIMONIO' },
    { nombre: 'MAXIMILIANO', apellido: 'MINGOTE', cuit: '20322639237', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: ' MICAELA ROCIO', apellido: 'MINGOTE ', cuit: '27378488791', gerencia: 'DIRECCION GENERAL', subgerencia: 'DIRECCION GENERAL' },
    { nombre: 'GONZALO GABRIEL', apellido: 'MOSCIARO', cuit: '20394631646', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'ABREGO MATEO', apellido: 'NUÑES ', cuit: '23287705069', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'MARIA CECILIA', apellido: 'PAEZ', cuit: '27316934272', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA RECLAMOS' },
    { nombre: 'CAMILA', apellido: 'PAGAZAURTUNDUA ', cuit: '27409311283', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' }, 
    { nombre: 'MIGUEL ANGEL', apellido: 'PALADINI ', cuit: '20045499546', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'ZOEL', apellido: 'PALLONE', cuit: '23442547424', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'JAVIER', apellido: 'PALUMBO ', cuit: '20359618094', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'ARMANDO ANIBAL', apellido: 'PARODI', cuit: '20045471544', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'MARTA ISABEL', apellido: 'PAUL DEL VALLE ', cuit: '27056636094', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA GESTIÓN DE OBRAS' },
    { nombre: 'FEDERICO', apellido: 'PERALTA ABRAHAM', cuit: '20407335628', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'FRANCISCO', apellido: 'PEREZ ABAD ', cuit: '20430515641', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA GEORREFERENCIACION Y SISTEMAS DE INFORMACIÓN' },
    { nombre: 'JUAN', apellido: 'PERRONE BELLIZI', cuit: '20400084972', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'GABRIEL', apellido: 'PETTINARI ', cuit: '20237696531', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'AMBAR', apellido: 'PIS', cuit: '27454758256', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'MANUELA', apellido: 'POLO PASQUINI', cuit: '27360488913', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'ALEJANDRO', apellido: 'POTENZA', cuit: '23373423149', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'VANESA', apellido: 'PUCHETA ', cuit: '23302526974', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'MARIA AGUSTINA', apellido: 'RODRIGAÑEZ', cuit: '27421456351', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'HEBER GABRIEL', apellido: 'RODRIGUEZ ', cuit: '23329652629', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'RUTH ISABEL', apellido: 'ROMERO FERNANDEZ', cuit: '27945545424', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA GESTIÓN DE OBRAS' },
    { nombre: 'SELENE', apellido: 'ROMERO ', cuit: '27388000592', gerencia: 'DIRECCION GENERAL', subgerencia: 'DIRECCION GENERAL' },
    { nombre: 'CRISTOBAL', apellido: 'ROMERO', cuit: '20367456656', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'SABRINA', apellido: 'ROMERO ', cuit: '27363977621', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA RECLAMOS' },
    { nombre: 'WALTER RUBEN', apellido:'ROMERO', cuit: '20242153198', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'HECTOR', apellido:'RUBILOTTA ', cuit: '20361601301', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'CAMILA JAZMIN', apellido: 'SANCHEZ PRADO', cuit: '27438171512', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA DE EMERGENCIAS' },
    { nombre: 'MARA LUCIA', apellido: 'SANCHEZ ', cuit: '23414560814', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'ALEJANDRO', apellido: 'SCHWARTZ', cuit: '20273747568', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'ANA SILVIA', apellido: 'SCRIMAGLIA ', cuit: '27217644998', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'NICOLAS', apellido: 'SIMON', cuit: '20282293626', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'NICOLAS ANDRES', apellido: 'SOLA ', cuit: '20353601564', gerencia: 'G.O SOPORTE ADMINISTRATIVO', subgerencia: 'SUBGERENCIA OPERATIVA COMPRAS Y CONTRATACIONES' },
    { nombre: 'NORBERTO', apellido: 'SOSA', cuit: '20044331722', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'BENJAMIN', apellido: 'SPAMPITANO ', cuit: '20432401627', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'AGUSTIN', apellido: 'TORRES', cuit: '20422486055', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'CHIARA', apellido: 'TRASMONTE ', cuit: '27435207656', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'RODRIGO SEBASTIAN', apellido: 'VALLEJOS', cuit: '23352171379', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'G.O OBRAS EN CALZADA' },
    { nombre: 'MARIANO', apellido: 'VENCE ', cuit: '20144002491', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' },
    { nombre: 'FLORENCIA', apellido: 'VINIARSKY', cuit: '27390010902', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'ANTONELLA', apellido: 'VIVAS ARNESE ', cuit: '27372553508', gerencia: 'G.O PLANIFICACION', subgerencia: 'G.O PLANIFICACION' },
    { nombre: 'JONATAN YAEL', apellido: 'YANERINI', cuit: '20333685907', gerencia: 'G.O COORDINACION DE PUENTES', subgerencia: 'G.O COORDINACION DE PUENTES' },
    { nombre: 'DANTE', apellido: 'ZABALA ', cuit: '20291500839', gerencia: 'G.O PLANIFICACION', subgerencia: 'SUBGERENCIA OPERATIVA FISCALIZACIÓN Y PLANIFICACIÓN DE CALZADAS' },
    { nombre: 'SEBASTIAN MATIAS', apellido: 'ZAGAGLIA', cuit: '20329968872', gerencia: 'G.O OBRAS EN CALZADA', subgerencia: 'SUBGERENCIA OPERATIVA INSPECCIÓN Y SOPORTE DE EJECUCIÓN' }, 
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
    if (!input.value) return; // Si no hay valor, no mostrar nada

    const valorLower = input.value.toLowerCase();
    const filtrados = sugerencias.filter(persona => 
        persona.nombre.toLowerCase().includes(valorLower) || 
        persona.apellido.toLowerCase().includes(valorLower)
    );

    filtrados.forEach(elemento => {
        const div = document.createElement('div');
        div.classList.add('suggestion');
        div.textContent = `${elemento.nombre} ${elemento.apellido} - ${elemento.cuit} (${elemento.gerencia}, ${elemento.subgerencia})`;
        div.onclick = () => {
            completarCampos(elemento); // Completar campos del formulario
            contenedor.innerHTML = ''; // Limpiar sugerencias
        };
        contenedor.appendChild(div);
    });
}

// Función para convertir el texto a mayúsculas
function toUpperCaseInput(event) {
    event.target.value = event.target.value.toUpperCase();
}

// Agregar eventos para convertir a mayúsculas en los campos de entrada
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
    document.getElementById('mes').value = persona.mes;
    document.getElementById('fecha').value = persona.fecha;
    document.getElementById('ingreso').value = persona.ingreso;
    document.getElementById('egreso').value = persona.egreso;
    document.getElementById('observaciones').value = persona.observaciones;

    // Convertir todos los valores de los campos a mayúsculas
    document.getElementById('nombre').value = persona.nombre.toUpperCase();
    document.getElementById('apellido').value = persona.apellido.toUpperCase();
    document.getElementById('gerencia').value = persona.gerencia.toUpperCase();
    document.getElementById('subgerencia').value = persona.subgerencia.toUpperCase();
    document.getElementById('mes').value = persona.mes.toUpperCase();
    document.getElementById('observaciones').value = persona.observaciones.toUpperCase();
}

// Los siguientes 'event listeners' seguirán igual
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
                    <td><button onclick="removePerson('${person.cuit}')">❌</button></td>
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
