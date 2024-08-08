const { conn } = require('./src/data');
const { PORT } = require('./src/config/envs.js');
require('dotenv').config();
const app = require('./src/app.js')
const usersData = require('./src/helpers/usersInfo.js')
const loadPlaces = require('./src/helpers/loadData.js')
const dataHoteles = require('./src/helpers/dataHoteles.js')
const dataRestaurants = require('./src/helpers/dataRestaurants.js')



conn.sync({ alter: true }).then(async () => {

  try {
    // Ejecutar helpers de carga de datos
    await usersData();
    await loadPlaces();
    await dataHoteles();
    await dataRestaurants();

    app.listen(PORT, () => {
      console.log(`🚀 listening on port: ${PORT} 🚀`);
    });
  } catch (error) {
    console.error('Error loading initial data:', error);
  }
});