const { User } = require('../data'); // Ajusta la ruta según la ubicación de tu modelo
const usersInfo = require('../dataMokeada/usuarios'); // Ajusta la ruta según la ubicación de tu archivo de datos

async function usersData() {
  try {
    // Comienza la transacción
    await User.sequelize.transaction(async (transaction) => {
      // Itera sobre cada user en el array y créalas en la base de datos si no existen
      for (const user of usersInfo) {
        // Verifica si el usuario ya existe basado en n_document o email
        const existingUser = await User.findOne({
          where: {
            n_document: user.n_document,
          },
          transaction,
        });

        if (!existingUser) {
          await User.create({
            first_name: user.first_name,
            last_name: user.last_name,
            gender: user.gender,
            n_document: user.n_document,
            email: user.email,
            password: user.password,
            phone: user.phone,
            city: user.city,
            role: user.role,
          }, { transaction });
        }
      }
    });

    console.log('Datos de usuarios cargados correctamente');
  } catch (error) {
    console.error('Error al cargar datos de usuarios:', error);
  }
}

module.exports = usersData;
