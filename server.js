const express = require("express");
const path = require("path")
const app = express();


const { bootstrapApp } = require('./app/bootstrap');
const swaggerSpec = require('./config/swagger');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

bootstrapApp(app);


// Redoc
app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'redoc.html'));
  });

  app.get('/api-docs/openapi.json', (req, res) => {
    res.json(swaggerSpec);
  });

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});