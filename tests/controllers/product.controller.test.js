const {createProduct} = require('../../controller/product')
const { Products } = require('../../models')
const {mockRequest, mockResponse} = require('../interceptor')


describe('Product Controller testing',()=>{

	let req, res;

	beforeEach(()=>{
		req = mockRequest()
		res = mockResponse()
	})
	
	it('test success createProductController',async ()=>{

		const testPayload = {
			name: 'sony tv',
			description:'About TV',
			cost: 234,
			quantity: 12,
			CategoryId: 1
		}
		
		req.body = testPayload;

		const createProductSpy = jest.spyOn(Products, 'create').mockImplementation(
                          (testPayload) => Promise.resolve(testPayload)
                       );
		
		await createProduct(req,res)

		expect(createProductSpy).toHaveBeenCalled()
		expect(Products.create).toHaveBeenCalledWith(testPayload);

		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.send).toHaveBeenCalled()
		expect(res.send).toHaveBeenCalledWith(
			{
				"msg": 'Product got created',
				"result" : {
					name: 'sony tv',
					description:'About TV',
					cost: 234,
					quantity: 12,
					CategoryId: 1
				}
			 })	
	})

	it('test error createProductController',async ()=>{

		const testPayload = {
			name: 'sony tv',
			description:'About TV',
			cost: 234,
			quantity: 12,
			CategoryId: 1
		}
		
		req.body = testPayload;

		const createProductSpy = jest.spyOn(Products, 'create').mockImplementation(
                          (testPayload) => Promise.reject('hey creation error')
                       );
		
		await createProduct(req,res)

		expect(createProductSpy).toHaveBeenCalled()
		expect(Products.create).toHaveBeenCalledWith(testPayload);

		expect(res.status).toHaveBeenCalledWith(500)
		expect(res.send).toHaveBeenCalled()
		expect(res.send).toHaveBeenCalledWith(
			{
				"msg": 'Internal server error',
				"err" : 'hey creation error'
			 })	
	})

})