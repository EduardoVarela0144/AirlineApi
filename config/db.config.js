module.exports = {
  //Local
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "eduardo",
  DB: "aerolinea",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
