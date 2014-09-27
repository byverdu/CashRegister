var expect       = require('chai').expect;
var Product      = require('../lib/Product');    
var CashRegister = require('../lib/CashRegister');

var cashRegister;
var product;

beforeEach(function() {
  cashRegister = new CashRegister();
  product      = new Product('rice',3.5,1);
  product_1    = new Product('beans',1.25,2)
})

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.basket).to.have.length(0);
		});

		it('can accept products', function() {
			cashRegister.acceptProd(product);

			expect(cashRegister.basket).to.have.length(1);
		});

		it('can accept more than one product', function() {
			cashRegister.basket.length = 0; 

			cashRegister.acceptProd(product);
			cashRegister.acceptProd(product_1);

			expect(cashRegister.basket).to.have.length(2);
		});
	});

	describe('Manipulating the basket', function() {
		
		it('knows the total amount for one product', function() {
			
			cashRegister.acceptProd(product);

			expect(cashRegister.basket).to.have.length(1);
			expect(cashRegister.totalProducts).to.equal(1)

		});

		it('knows the total amount for two products', function() {
			
			cashRegister.acceptProd(product);
			cashRegister.acceptProd(product_1);

			expect(cashRegister.totalProducts).to.equal(2)
		});

		it('knows the total quantity of products', function() {
			

		});
	});


});