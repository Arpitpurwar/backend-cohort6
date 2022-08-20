const {Products} = require('../../../models')
const { mockRequest, mockResponse } = require('../interceptor');
const {createProduct} = require('../../../controller/product')
let req,res;

beforeEach(()=>{
	req = mockRequest();
	res = mockResponse();
})

const testPayload = 
		{
		    "description":"Nyka best products",
		    "name" :"MakeUP Kit",
		    "cost": 870,
		    "quantity": 20,
			"CategoryId": 1
		}

describe('Product Controller Create method', ()=>{
	it('should return success with product details',async ()=>{
		req.body = testPayload
		const spy = jest.spyOn(Products, 'create')
                       .mockImplementation(
                          (testPayload) => Promise.resolve(testPayload)
                       );
		
        await createProduct(req, res);
		expect(spy).toHaveBeenCalled();
		expect(Products.create).toHaveBeenCalledWith(testPayload);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
			"msg":"Product got created",
			"result": {
          		"CategoryId": 1,
          		"cost": 870,
          		"description": "Nyka best products",
          		"name": "MakeUP Kit",
          	"quantity": 20,
		}});
	})
})