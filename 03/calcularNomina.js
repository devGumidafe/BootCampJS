// Empleados
const empleado_1 = {
    bruto: 24000,
    hijos: 2,
    pagas: 12
}

const empleado_2 = {
    bruto: 1800,
    hijos: 0,
    pagas: 14
}

// Función que calcula la retención según salario y numero de hijos
function getRetencion(empleado) {
    const bruto = empleado.bruto;
    const retencionPorHijos = getRetencionPorHijos(empleado);

    if (bruto < 12000) {
        return 0;

    } else if (bruto < 24000) {
        return 0.08 - retencionPorHijos;

    } else if (bruto < 34000) {
        return 0.16 - retencionPorHijos;

    } else if (bruto >= 34000) {
        return 0.30 - retencionPorHijos;

    } else {
        return 0;
    }
}


function getRetencionPorHijos(empleado) {
    return empleado.hijos > 0 ? 0.02 : 0;
}

// Función que imprime la retención, salario anual y mensual
function getPrintSalarioNeto(empleado) {
    const bruto = empleado.bruto;
    const retencion = getRetencion(empleado);
    const netoAnual = bruto - (bruto * retencion);
    const netoMensual = netoAnual / empleado.pagas;

    console.log(`Salario bruto anual: ${bruto} €`);
    console.log(`Retenciones: ${retencion * 100} %`);
    console.log(`Salario neto anual: ${netoAnual} €`);
    console.log(`Salario neto mensual: ${netoMensual} €`);
}

console.log('')
console.log('---EJERCICIO CALCULAR NÓMINA---');
getPrintSalarioNeto(empleado_1);





