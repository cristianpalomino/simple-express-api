<h1 align="center">Basic Express Api</h1>

## Description

Basic Expres Api, developed with the purpose of read a csv file and format the data readed to a .json file.

## Endpoint

```json

[GET] /documents 

{
    documento: {
        fecha_emision: "07/10/2016",
        correlativo: "F001-00000001",
        moneda: "PEN",
    },
    emisor: {
        a_n_r: "1818 S.A.C",
        nombre_comercial: "",
        ruc: "20505108672",
    },
    receptor: {
        numero_documento: "10459743948",
        tipo_documento: "Registro Único de Contribuyente",
    },
}
```
## Instalation

1. Clone Repository
2. Run <code>npm run dev</code>

## Modules

- Express
- Nodemon
- CSV Parse