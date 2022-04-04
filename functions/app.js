const swapi = require('swapi-node');
const { responseHeader } = require('../helpers')

exports.getPeopleById = async (event, context) => {
    let response = responseHeader
    try {
        const params = event.queryStringParameters
        const id = parseInt(params.id)
        const people = await swapi.people({ id: id }).then((result) => {
            return result
        })
        console.log("people => ", people)
        response = {
            ...response,
            'statusCode': 200,
            'body': JSON.stringify(people)
        }
        return response
    } catch (err) {
        console.log(err);
        return {
            ...response,
            'statusCode': 500,
            'body': JSON.stringify(err)
        }
    }
}