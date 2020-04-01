const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()


app.use(cors())

/**
 * Para o body entender json
 */
app.use(express.json())

/**
 * Para usar as rotas
 */
app.use(routes)

app.listen(3333)
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 * 
 */

/**
* Tipo de Parâmetros
* 
* Query: parâmetros nomeados enviados na rota após simbolo de ? (Filtro, paginação) Ex: /?name=Gabriel&idade=25
* Route: parâmetros usados para identificar recursos Ex: /users/:id -> /users/1
* Request Body: corpo da requisição, utilizado para criar ou alterar recurso (post, put)
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() ... (knex.js) -> npx knex init
 */