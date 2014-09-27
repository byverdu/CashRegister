var expect  = require('chai').expect;
var Product = require('../lib/Product');

var product; 

describe('Product', function() {

	
	describe('constructor', function() {
	  
	  it('should have a default name', function() {
      
      var product = new Product('rice');
	    
	    expect(product.name).to.be.a('string');	
	    expect(product.name).to.equal('rice');	
	  });

	  it('should have a default price', function() {
      
      var product = new Product('rice',3.5);

	    expect(product.price).to.be.a('number');	
	    expect(product.price).to.equal(3.5);	
	 	});

	  it('should have a default quantity', function() {

	  	var product = new Product('rice',3.5,1);
	  	
	  	expect(product.quantity).to.be.a('number');
	  	expect(product.quantity).to.equal(1);
	  });

	});	

});