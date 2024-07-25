const { conn } = require('./src/data');
const { PORT } = require('./src/config/envs.js');
require('dotenv').config();
const app = require('./src/app.js')
const loadPlaces = require('./src/helpers/loadData.js')
const dataHoteles = require('./src/helpers/dataHoteles.js')
const dataRestaurants = require('./src/helpers/dataRestaurants.js')
// Syncing all the models at once.
conn.sync({ alter: true }).then(async () => {

  await loadPlaces();
  await dataHoteles();
  await dataRestaurants()



  app.listen(PORT, () => {
    console.log(`🚀 listening on port: ${PORT} 🚀`);
  });
 
});
