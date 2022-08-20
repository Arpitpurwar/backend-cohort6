const request = require('supertest');
const {app} = require('../../../index')
const api_endpoint = '/ecomm/api/v1/products'

describe('Product routes', ()=>{
	it('should get product details',async ()=>{
		const res = await request(app).get(api_endpoint)
		expect(res.statusCode).toBe(200)
	})
})