const express = require("express");
const app = express();
const { swaggerUi, specs } = require('./config/swagger');


const { bootstrapApp } = require('./app/bootstrap');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

bootstrapApp(app);

// Adicionando swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});