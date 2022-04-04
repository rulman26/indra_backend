var request = require('supertest')
const api_gateway = 'https://nb5ghd88r3.execute-api.us-east-1.amazonaws.com/dev/'
describe('obtener datos persona', () => {
    test('obtener datos swapi', async () => {
        const response = await request(api_gateway).get('obtener-persona-por-id?id=1').send();
        expect(response.status).toBe(200)
    })

    test('paginar personas', async () => {
        const response = await request(api_gateway).get('paginar-personas?pagina=0&limite=10').send();
        expect(response.status).toBe(200)
    })
    
    test('guardar persona', async () => {
        const response = await request(api_gateway).post('guardar-persona')
        .send({
            "nombre":"Maria test",
            "altura":"170",
            "masa":"73",
            "colorPelo":"marron",
            "colorPiel":"blanca",
            "colorOjo":"negro",
            "fechaNacimiento":"27/09/1992",
            "genero":"F"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
        expect(response.status).toBe(200)
    })
}) 