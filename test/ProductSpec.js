var expect  = require('chai').expect;
var Product = require('../lib/Product');

describe('Product', function() {
	
	it('is initialize with a name and price', function() {
	  
	  var product = new Product('rice',3.5,2);

	  expect(product.name).to.equal('rice');	
	  expect(product.price).to.equal(3.5);	
	  expect(product.quantity).to.equal(2);	

	});	

});