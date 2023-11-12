const Todo = require('../models/todo.model');
const User = require('../models/user.model');

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find()

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById: async (req, res) => {
   const id = req.params.id;

   User.findById(id)
   .then(data => res.send(data))
   .catch(err => res.status(500).send({message: err.message}))
  },

  getUserTodos: async (req, res) => {
    const {id} = req.params

    const todos = await Todo.find({userID: id})

    res.json(todos)
  },

  createUser: async (req, res) => {
   req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

   User.create(req.body)
   .then(() => res.send({message: "Data user berhasil disimpan"}))
   .catch(err => res.status(500).send({message: err.message}));
  },

  updateUserById: (req, res) => {
    
    const id = req.params.id;

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    User.findByIdAndUpdate(id, req.body, {userFindAndModify: false})
    .then(data => {
      if (!data) {
        res.status(404).send({message:"Tidak dapat mengupdate data"})
      }
      res.send({message: "Data berhasil di update"})
    })
    .catch(err => res.status(500).send({message: err.message}))

  },

  deleteUserById: (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({message: "Tidak dapat menghapus data"})
      }

      res.send({message: "Data berhasil di hapus"})
    })
    .catch(err => res.status(500).send({message: err.message}))
  },

  deleteAllUser:  async (req, res) => {
      try {
        const result = await User.deleteMany({});
        console.log('${result.deletedCount} users deleted.');
        res.json({message: '${result.deleteCount} users deleted.'});
      } catch (error) {
        console.error('Error deleting users:', error);
        res.status(500).json({message: "Internal Server error"});
      }
  }

}