const jwt = require('jsonwebtoken');
const { User } = require('../../data');
const response = require('../../utils/response');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return response(res, 400, "Email y contraseña son obligatorios");
    }

    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response(res, 404, "Usuario no encontrado");
    }

    // Comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return response(res, 401, "Contraseña incorrecta");
    }

    // Crear token
    const token = jwt.sign(
      { id: user.id, role: user.role, n_document: user.n_document,first_name: user.first_name,
        last_name: user.last_name }, // Incluir 'id' aquí
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    response(res, 200, { message: "Autenticación exitosa", token, n_document: user.n_document, role: user.role,first_name: user.first_name,
      last_name: user.last_name });
  } catch (error) {
    console.error(error);
    response(res, 500, "Error al autenticar el usuario");
  }
};


