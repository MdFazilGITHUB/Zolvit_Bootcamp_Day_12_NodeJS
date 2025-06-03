// server.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const PORT = 3000;

app.use(express.json());

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a Hello World message
 *     responses:
 *       200:
 *         description: Successful hello message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World
 */
app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

/**
 * @swagger
 * /api/echo:
 *   post:
 *     summary: Echoes back the posted JSON data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: John
 *               age: 30
 *     responses:
 *       201:
 *         description: Echoed data
 */
app.post("/api/echo", (req, res) => {
  res.status(201).json({ echoed: req.body });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 Swagger docs at http://localhost:${PORT}/api-docs`);
});
