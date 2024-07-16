const { Place } = require('../../data');
const response = require('../../utils/response');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, valoracion, ubicacion} = req.body;

  if (!nombre && !descripcion && !valoracion && !ubicacion ) {
    return response(res, 400, { error: "No data to update" });
  }

  try {
    const post = await Place.findByPk(id);

    if (!post) {
      return response(res, 404, { error: "Post not found" });
    }

    // Actualizar los campos 
    post.nombre = nombre !== undefined ? nombre : post.nombre;
    post.descripcion = descripcion !== undefined ? descripcion : post.descripcion;
    post.valoracion = valoracion !== undefined ? valoracion : post.valoracion;
    post.ubicacion = ubicacion !== undefined ? ubicacion : post.ubicacion;

    // Guardar los cambios en la base de datos
    await post.save();
    console.log('Post updated:', post);

    return response(res, 200, { message: "Post updated successfully", post });
  } catch (error) {
    console.error('Error updating product:', error);
    return response(res, 500, { error: error.message });
  }
};

