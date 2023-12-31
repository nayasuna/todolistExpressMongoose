const Todo = require('../models/todo.model');

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find()

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos
    })
  },

  getTodoById: async (req, res) => {
     try {
        // Ambil ID todo dari parameter rute
    const todoId = req.params.id;

    // Cari todo berdasarkan ID
    const todo = await Todo.findById(todoId);

    // Periksa apakah todo ditemukan
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    // Kirim todo sebagai respons
    res.json(todo);
  } catch (error) {
    console.error('Error getting todo by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

  /*Todo.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500). send({message: err.message})) */
 },

  createTodo: async (req, res) => {
    let data = req.body

    await Todo.create(data)

    res.json({
      message: "berhasil membuat data todo"
    })
  },

  updateTodoById:  async (req, res) => {
    const id = req.params.id
    const payload = req.body

    Todo.findByIdAndUpdate(id, payload, (err, doc) => {
      if(err) {
        res.json({
          message: "gagal update data todo dengan id ${id}"
      })
    }
    res.json({
      message: "berhasil ubah data id ${id}"
    })
  });
},

  deleteTodoById: (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({message: "Tidak dapat menghapus data todo"})
      }

      res.send({message: "Data todo berhasil di hapus"})
    })
    .catch(err => res.status(500).send({message: err.message}))
  },

  deleteAllTodo:  async (req, res) => {
    try {
      const result = await Todo.deleteMany({});
      console.log('${result.deletedCount} todos deleted.');
      res.json({message: '${result.deleteCount} todos deleted.'});
    } catch (error) {
      console.error('Error deleting todos:', error);
      res.status(500).json({message: "Internal Server error"});
    }
}
}