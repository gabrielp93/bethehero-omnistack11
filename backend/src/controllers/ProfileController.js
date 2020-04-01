const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization

        const incidents = await connection('incidents')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])
        .where('incidents.ong_id', ong_id)
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')

        return response.json(incidents)
    },
}