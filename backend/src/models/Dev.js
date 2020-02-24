//importando o banco de dados mongoose para podermos informar
// qual o formado que um Dev precisa ter na base de dados

const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//Schema é a istruturação de uma entidade no banco de dados
const DevSchema = new mongoose.Schema({
    //informndo quais campos o Dev vai ter
  name: String,
  github_username: String,
  bio: String, //biografia do usuario
  avatar_url: String,
  
  //criando um vetor de strings para armazenar as tecnologias do usuario
  techs: [String], 
  location: {
      type:PointSchema,
      index: '2dsphere'
  }

});

//exportando o model acima
//'Dev' é o nome que vai ser salvo no banco de dados
module.exports = mongoose.model('Dev', DevSchema);