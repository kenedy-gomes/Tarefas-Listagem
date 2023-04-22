//config inicial
const Task = require("../Models/Tarefas");
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const app = express();
//config JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.json());
//CONEXÃO COM O BANCO MONGODB!
mongoose
  .connect(
    "mongodb+srv://dbList:6kWEZikmbyZUqlJ4@cluster0.zmvjqmo.mongodb.net/bancoAPI?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3001);
  })
  .catch((err) => console.log("Erro ao conectar ao banco de dados:", err));

//SENHA BANCO = 6kWEZikmbyZUqlJ4

//Rotas

// Listar todas as tarefas

app.get("/tarefas", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const task = await Task.find();
  res.send(task);
});

app.get("/tarefas/status", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const statusFiltro = req.query.status;
    const query = statusFiltro ? { status: statusFiltro } : {};
    const ListaTarefas = await Task.find(query);
    res.send(ListaTarefas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// Cadastrar uma tarefas
app.post("/tarefas/cadastro", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  });

  res.send(task);
});

// Atualizar uma tarefas
app.put("/tarefas/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    },
    { new: true }
  );
  res.send(task);
});

// Deletar uma tarefas
app.delete("/tarefas/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Tarefa excluída com sucesso!");
});
