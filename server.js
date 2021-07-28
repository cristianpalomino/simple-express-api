const express = require('express');

const api = express();
api.use(require('body-parser').json());

const documents = require('./routers/document.router');
api.use('/documents', documents);

api.listen(3001, () => {
    console.log('Server running on port 3001');
});