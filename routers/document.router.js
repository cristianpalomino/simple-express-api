const express = require("express");
const parser = require('csv-parse');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    const nota_credito = require('../models/nota.credito');
    const results = [];
    fs.createReadStream('./documents/NC_Gravado.csv')
    .pipe(parser({ relax_column_count: true }))
    .on('data', (data) => {
        results.push(data);
    })
    .on('end', () => {
        // Documento
        nota_credito.documento.fecha_emision = results[0][0];
        nota_credito.documento.correlativo = results[0][1];
        nota_credito.documento.moneda = results[0][2];
        // Emisor
        nota_credito.emisor.a_n_r = results[2][0];
        nota_credito.emisor.nombre_comercial = results[2][1];
        nota_credito.emisor.ruc = results[2][2];
        // Receptor
        nota_credito.receptor.numero_documento = results[3][0];
        const tipo = results[3][1];
        if (tipo == "6") {
            nota_credito.receptor.tipo_documento = "Registro Único de Contribuyente";
        }
        res.send(nota_credito);
    });
});

module.exports = router;