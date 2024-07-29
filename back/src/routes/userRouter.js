const express = require("express");
const router = express.Router();
const {
  createUsers,
  putUser,
  deleteUser,
  getAllUsers,
  getUserByDocument,
  toggleSubscription
} = require("../controllers/Users");
const { authenticate, authorize } = require("../controllers/Users/authMiddleware");

// Ruta para crear usuario
router.post("/", createUsers);

// Ruta para actualizar usuario
router.put("/:n_document", authenticate, authorize(['SuperAdmin']), putUser);

// Ruta para eliminar usuario
router.delete("/:n_document", authenticate, authorize(['SuperAdmin']), deleteUser);

// Ruta para obtener todos los usuarios
router.get("/", authenticate, authorize(['SuperAdmin']), getAllUsers);

// Ruta para obtener un usuario por documento
router.get("/:n_document", authenticate, authorize(['SuperAdmin']), getUserByDocument);

router.post('/:n_document/toggleSubscription', authenticate, toggleSubscription);

module.exports = router;


