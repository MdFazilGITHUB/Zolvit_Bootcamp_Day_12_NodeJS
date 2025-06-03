// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Day 12 Express API',
      version: '1.0.0',
      description: 'API Documentation for Day 12 Postman + Swagger task',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./server.js'], // <-- Swagger annotations source
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
