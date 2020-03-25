const express = require('express')

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

module.exports = routes