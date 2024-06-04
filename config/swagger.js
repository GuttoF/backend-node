const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Doc',
      version: '1.0.0',
      description: 'Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Agenda: {
          type: 'object',
          required: ['nome', 'celular'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID da agenda',
            },
            nome: {
              type: 'string',
              description: 'Nome do contato',
            },
            celular: {
              type: 'string',
              description: 'Celular do contato',
            },
            email: {
              type: 'string',
              description: 'Email do contato',
            },
            rua: {
              type: 'string',
              description: 'Rua do endereço do contato',
            },
            numero: {
              type: 'string',
              description: 'Número do endereço do contato',
            },
            bairro: {
              type: 'string',
              description: 'Bairro do contato',
            },
            cidade: {
              type: 'string',
              description: 'Cidade do contato',
            },
            estado: {
              type: 'string',
              description: 'Estado do contato',
            },
            cep: {
              type: 'string',
              description: 'CEP do contato',
            },
            complemento: {
              type: 'string',
              description: 'Complemento do endereço do contato',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação da agenda',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de atualização da agenda',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js', './app/controllers/api/*.js'], // Caminhos para os arquivos de rotas e controladores da API
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
