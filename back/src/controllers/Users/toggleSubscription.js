// controllers/user/toggleSubscription.js
const { User } = require("../../data");
const response = require("../../utils/response");

module.exports = async (req, res) => {
  try {
    const nDocument = req.params.n_document;
    const { activateSubscription } = req.body;

    const user = await User.findOne({ where: { n_document: nDocument } });

    if (!user) {
      return response(res, 404, "Usuario no encontrado");
    }

    if (activateSubscription !== undefined) {
      if (user.role !== 'Admin' && user.role !== 'SuperAdmin') {
        return response(res, 403, "Solo los usuarios con rol Admin o SuperAdmin pueden tener suscripción");
      }

      if (activateSubscription) {
        user.subscriptionStartAt = new Date();
        user.subscriptionExpiresAt = new Date(new Date().setDate(new Date().getDate() + 30)); // Suscripción de 30 días
        user.subscriptionActive = true;
      } else {
        user.subscriptionStartAt = null;
        user.subscriptionExpiresAt = null;
        user.subscriptionActive = false;
      }

      await user.save();
    }

    response(res, 200, "Estado de suscripción actualizado", user);
  } catch (error) {
    console.error(error);
    response(res, 500, "Error al actualizar la suscripción");
  }
};
