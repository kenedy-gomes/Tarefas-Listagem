const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Usuarios = mongoose.model("Peaple", UsuariosSchema);
module.exports = Usuarios;
