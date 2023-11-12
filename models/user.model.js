const mongoose = require('mongoose');
const { schema } = require('./todo.model');

const userSchema = new mongoose.Schema(
  {
    nama_lengkap: String,
    username: String,
    jenis_kelamin: String,
    tanggal_lahir: Date,
    tempat_lahir: String,
    alamat: String,
    email: String,
    password: String,
    konfirmasi_password: String
  }, {
    timestamps: true
  }
);

  schema.method("toJSON", function(){
    const {__v, _id, ...Object} = this.toObject();
    Object.id = _id;

    return Object;
  });

const User = mongoose.model("User", userSchema)

module.exports = User