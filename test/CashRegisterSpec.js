var expect       = require('chai').expect;
var Product      = require('../lib/Product');    
var CashRegister = require('../lib/CashRegister');

var cashRegister;
var rice,beans;

beforeEach(function() {
  cashRegister = new CashRegister();
  rice         = new Product('rice' ,3.5,1);
  beans        = new Product('beans',1.25,2)
})

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.basket).to.have.length(0);
		});

		it('can accept products', function() {
			cashRegister.acceptProd(rice);

			expect(cashRegister.basket).to.have.length(1);
		});

		it('can accept more than one product', function() {
			cashRegister.basket.length = 0; 

			cashRegister.acceptProd(rice);
			cashRegister.acceptProd(beans);

			expect(cashRegister.basket).to.have.length(2);
		});
	});

	describe('Manipulating the basket', function() {
		
		it('knows the total amount for one product', function() {
			
			cashRegister.acceptProd(rice);

			expect(cashRegister.basket).to.have.length(1);
			expect(cashRegister.total_products).to.equal(1)

		});

		it('knows the total amount for two products', function() {
			
			cashRegister.acceptProd(rice);
			cashRegister.acceptProd(beans);

			expect(cashRegister.total_products).to.equal(2)
		});

		it('knows the total quantity if there is only one product', function() {
			
			cashRegister.acceptProd(rice);

			expect(cashRegister.total_quantity).to.equal(1)
		});

		it('knows the total quantity if there is more than one product', function() {

			cashRegister.total_quantity = 0;
			
			cashRegister.acceptProd(rice);
			cashRegister.acceptProd(beans);

			expect(cashRegister.total_quantity).to.equal(3)
		});

		it('can delete the last added item', function() {
			
			cashRegister.acceptProd(rice);
			cashRegister.delete_last();

			expect(cashRegister.total_products).to.equal(0);
		});

		it('can delete a product by name', function() {
			cashRegister.acceptProd(rice);
			cashRegister.acceptProd(beans);

			cashRegister.delete_by_name('rice');

			expect(cashRegister.total_products).to.equal(1);
			expect(cashRegister.basket).to.contain({name:'beans',price:1.25,quantity:2});
		});
	});


});