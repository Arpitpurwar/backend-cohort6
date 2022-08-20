const {app} = require('../../app')
const request = require('supertest')



test('getAllProductsAPI', async()=>{
	const API_END_POINT = '/ecomm/api/v1/products';

	const res = await request(app).get(API_END_POINT);
	console.log(res.body)
	expect(res.statusCode).toBe(201)
})