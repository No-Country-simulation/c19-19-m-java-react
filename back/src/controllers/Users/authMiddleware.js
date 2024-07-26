const jwt = require("jsonwebtoken");
const response = require("../../utils/response");

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return response(res, 401, 'Acceso denegado. No se proporcionó un token.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Debería incluir id, role, y n_document
    console.log('Decoded Token:', decoded); // Asegúrate de que 'decode' tenga la propiedad 'id'

    console.log('Authenticated User:', req.user); // Verifica que req.user esté definido
    next();
  } catch (error) {
    console.error('Error en la autenticación:', error);
    response(res, 400, 'Token no válido.');
  }
};


const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return response(res, 403, "No tienes permiso para realizar esta acción.");
  }
  next();
};

module.exports = {
  authenticate,
  authorize
};

