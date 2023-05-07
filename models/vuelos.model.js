module.exports = (sequelize, Sequelize) => {
  const Vuelos = sequelize.define("vuelos", {
    origen: {
      type: Sequelize.STRING,
    },
    destino: {
      type: Sequelize.STRING,
    },
    fecha_hora_salida: {
      type: Sequelize.DATE,
    },
    fecha_hora_entrada: {
      type: Sequelize.DATE,
    },
    aereolinea: {
      type: Sequelize.STRING,
    },
    precio: {
      type: Sequelize.FLOAT,
    },
  });

  return Vuelos;
};
