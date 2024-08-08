const { User } = require("../../data");
const response = require("../../utils/response");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const nDocument = req.params.n_document; // Corregido a n_document
    const userUpdates = req.body;

    if (userUpdates.password) {
      userUpdates.password = await bcrypt.hash(userUpdates.password, 10);
    }
  
    const user = await User.findOne({ where: { n_document: nDocument } });

    if (!user) {
      return response(res, 404, "Usuario no encontrado");
    }

    if (userUpdates.activateSubscription !== undefined) {
      if (user.role !== 'Admin' && user.role !== 'SuperAdmin') {
        return response(res, 403, "Solo los usuarios con rol Admin o SuperAdmin pueden tener suscripción");
      }

      if (userUpdates.activateSubscription) {
        userUpdates.subscriptionStartAt = new Date();
        userUpdates.subscriptionExpiresAt = new Date(new Date().setDate(new Date().getDate() + 30)); // Suscripción de 30 días
        userUpdates.subscriptionActive = true;
      } else {
        userUpdates.subscriptionStartAt = null;
        userUpdates.subscriptionExpiresAt = null;
        userUpdates.subscriptionActive = false;
      }

      delete userUpdates.activateSubscription;
    }




    const [updatedRowsCount] = await User.update(userUpdates, { where: { n_document: nDocument } });

    if (updatedRowsCount === 0) {
      return response(res, 404, "Usuario no encontrado");
    }

    response(res, 200, "Usuario actualizado con éxito");
  } catch (error) {
    console.error(error);
    response(res, 500, "Error al actualizar el usuario");
  }
};

