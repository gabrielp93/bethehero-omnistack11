const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/', (request, response) => {
  const queryParams = request.query
  const routeParams = request.params
  const bodyParams = request.body

  return response.json({
    evento: 'OmniStack',
    aluno: 'Gabriel Porto'
  })
})

/**
 * Rotas de Login
 */
routes.post('/session', SessionController.create)

/**
 * Rotas para Ongs
 */

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/**
 * Rotas para Perfil
 */
routes.get('/profile', ProfileController.index)
/**
 * Rotas para Casos
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes