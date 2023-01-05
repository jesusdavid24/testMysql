const { connection } = require("../database/mysql")


const plateEntry = async (req, res)=>{
    try {

        const field =  ['placa', 'barcode', 'tiempo_inicial', 'cod_park', 'cod_terminal', 'estado', 'fecha_hora', 'tipo_vehiculo', 'perdido', 'transmitido', 'mensual', 'hora_inicial', 'hora_final', 'contrato', 'valet', 'reimpresion'];

        const values = ["MUQ222", '$0025A71BC', 1659457696, '433', 'P433', 1, "2023-01-05-09:00:15", 1, 0, 0, 0,"00:00:00", "00:00:00", 0, 0, 0];

        connection.query(`INSERT INTO entrada1 (${field}) VALUES (${values})`, function (err, result){
        if (err) throw err;
        console.log('informacion ingresada exitosamente' + result)
    })
    return res.send({status: true, message: 'OK'});
    } catch (error) {
        console.log(JSON.stringify(error));
        return res.send({status: false, message: error.message});
    }
    
}

module.exports = {
    plateEntry
}

