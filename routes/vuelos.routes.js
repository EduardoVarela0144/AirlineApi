module.exports = (app) => {
  const vuelos = require("../controllers/vuelos.controller.js");

  var router = require("express").Router();
  // Crear una nuevo vuelo
  router.post("/vuelos", vuelos.create); //http://localhost:9595/varelaserver/vuelos

  // Crear muchos vuelos
  router.post("/vuelos_bulk", vuelos.bulkCreate); //http://localhost:9595/varelaserver/vuelos_bulk

  // Recuperar todos los vuelos
  router.get("/vuelos", vuelos.findAll); //http://localhost:9595/varelaserver/vuelos

  // Encontrar vuelos por id
  router.get("/vuelos/:id", vuelos.findOne); //http://localhost:9595/varelaserver/vuelos/[id]

  // Actualizar vuelos por id
  router.put("/vuelos/:id", vuelos.update); //http://localhost:9595/varelaserver/vuelos/[id]

  // Eliminar un vuelos por id
  router.delete("/vuelos/:id", vuelos.delete); //http://localhost:9595/varelaserver/vuelos/[id]

  // Eliminar todos los vuelos de la base de datos
  router.delete("/vuelosALL", vuelos.deleteAll); //http://localhost:9595/varelaserver/vuelosALL/

  app.use("/varelaserver", router);
};
