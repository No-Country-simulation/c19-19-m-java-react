const { conn } = require('./src/data');
const { PORT } = require('./src/config/envs.js');
require('dotenv').config();
const app = require('./src/app.js')
const loadPlaces = require('./src/helpers/loadData.js')

// Syncing all the models at once.
conn.sync({ alter: true }).then(async () => {

  await loadPlaces()


  
  app.listen(PORT, () => {
    console.log(`🚀 listening on port: ${PORT} 🚀`);
  });
 
});
