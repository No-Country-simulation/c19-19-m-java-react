const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("Authorization Header:", authorization);

  if (authorization) {
    const token = authorization.split(' ')[1];
    console.log("Extracted Token:", token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decode) => {
      if (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ error: true, message: 'Invalid Token', data: null });
      } else {
        console.log("Decoded Token:", decode);
        req.user = decode; // Establecer 'n_document' en lugar de 'id'
        next();
      }
    });
  } else {
    res.status(401).json({ error: true, message: 'No Token', data: null });
  }
};




