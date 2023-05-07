const db = require("../models");
const Vuelos = db.vuelos;

// Crear y Guardar un nuevo Vuelo
exports.create = (req, res) => {
  // Validar request
  if (!req.body.origen) {
    res.status(404).send({
      mensaje: "No puedes dejar el campo contenido como vacío",
    });
    return;
  }
  // Crear un Vuelo
  const vuelos = {
    origen: req.body.origen,
    destino: req.body.destino,
    fecha_hora_salida: req.body.fecha_hora_salida,
    fecha_hora_entrada: req.body.fecha_hora_entrada,
    aereolinea: req.body.aereolinea,
    precio: req.body.precio,
  };

  // Guardar Vuelos en la base de datos
  Vuelos.create(vuelos)
    .then((vuelos) => {
      res.status(200).send(vuelos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Crear y Guardar muchos Vuelos
exports.bulkCreate = (req, res) => {
  // Crear un Vuelos
  const vuelos = req.body;
  // Guardar Vuelos en la base de datos
  Vuelos.bulkCreate(vuelos)
    .then((vuelos) => {
      res.status(200).send(vuelos);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: err.message || "Ocurrio un error al crear Vuelo.",
      });
    });
};

// Recuperar todos los Vuelos de la base de datos
exports.findAll = (req, res) => {
  Vuelos.findAll({})
    .then((vuelos) => {
      res.status(200).send(vuelos);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrio un error al recuperar todos los Vuelos.",
      });
    });
};

// Encontrar Vuelos por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Vuelos.findByPk(id, {})
    .then((vuelos) => {
      res.status(200).send(vuelos);
    })
    .catch(() => {
      res.status(500).send({
        mensaje: "Error al recuperar Vuelo por id=" + id,
      });
    });
};

// Actualizar Vuelos por id
exports.update = (req, res) => {
  const id = req.params.id;
  Vuelos.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Vuelo actualizado con exito.",
        });
      } else {
        res.send({
          mensaje: `Error al actualizar Vuelo con id=${id}!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        mensaje: "Error al actualizar Vuelo con id=" + id,
      });
    });
};

// Eliminar un Vuelo por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Vuelos.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Vuelo eliminado con exito!",
        });
      } else {
        res.send({
          mensaje: `Error al eliminar Vuelo con id=${id}!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        mensaje: "Error al eliminar Vuelo con id=" + id,
      });
    });
};

// Eliminar todos los Vuelos de la base de datos
exports.deleteAll = (req, res) => {
  Vuelos.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ mensaje: `${nums} Vuelos fueron eliminados con exito!` });
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: err.message || "Error al eliminar Vuelos.",
      });
    });
};
