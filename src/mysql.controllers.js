const { createDB } = require("../db")



const obtenerUsuarios = (req,res) =>
    {
        alert("hola")
    }

// tarea -> hacer el endpoint de editar y de eliminar

// para el de editar, debe usarse el método PUT o PATCH y se haría mediante una mezcla de crear y obtener uno por id
// para el eliminar se debe buscar uno por id y eliminarlo de la lista

module.exports = {
    obtenerUsuarios
}