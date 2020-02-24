//Foi criado o arquivo routes.js para guardar todas as rotas

//importando somente o modulo de roteamento do express
const {Router} = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//declarando uma variavel chamada routes que recebera as funcoes do 
//modulo de roteamento do express
const routes = Router();

//rota para buscar/listar um Dev
routes.get('/devs', DevController.index);

//rota para cadastrar um Dev
routes.post('/devs', DevController.store );

routes.get('/search', SearchController.index );

//exportar o metodo routes.post para que a aplicacao consiga utiliza-lo
module.exports = routes;

