const express = require('express');
const mongoose = require('mongoose');
const app = express();

//importando as rotas do arquivo routes.js
const routes = require('./routes');

mongoose.connect('mongodb+srv://root:root@cluster0-czlic.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
} );

app.use(express.json());

app.use(routes);


//principais metodos
//get, post, put, delete
//buscar, gravar, editar, deletar 

//Tipos de parametros:
//Query params: (parametros de perguntas) request.query (Filtros, Ordenação, Paginação, Outros...)
//Route params: request.params (identificar um recuso na alteração ou remoção)
//Body: request.bory (Dados para criação ou alteração de um registro)



app.listen(3333);

