// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "NO_NUMERICA", "12.50USD", "9999.99", "10.00"];
let saldoTotal = 0;
 
console.log("Iniciando auditoría de transacciones...");
 
 
for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];
    
    // Bug 1: Controlar valores corruptos
    // Ignorar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {

        console.log("Transacción corrupta saltada.");
         // Falta algo aquí para saltar a la siguiente vuelta...
        continue;
    }
 
    let importe = Number(transaccion);
    if (Number.isNaN(importe)) {
        console.log("Transacción no numérica saltada.");
        continue;
    }
    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    // Detener operaciones sospechosas (alerta de fraude si supera 5000)
    if (importe > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break;
    }
 
 
    saldoTotal += importe;

}
 
 
console.log("Saldo total auditado: " + saldoTotal);