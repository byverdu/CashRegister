// force the test environment to 'test'
process.env.NODE_ENV = 'test';

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

function adding_two_products(){
	cashRegister.accept_prod(rice);
	cashRegister.accept_prod(beans);
}

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.basket).to.have.length(0);
		});

		it('can accept products', function() {
			cashRegister.accept_prod(rice);

			expect(cashRegister.basket).to.have.length(1);
		});

		it('can accept more than one product', function() {
			cashRegister.basket.length = 0; 

			adding_two_products();

			expect(cashRegister.basket).to.have.length(2);
		});
	});

	describe('Manipulating the basket', function() {

		it('searching by name', function() {
       adding_two_products();

       expect(cashRegister.search_by_name('rice')).to.eql({name:'rice',price:3.5,quantity:1})
		});	

		describe('For the total amount of', function() {
			
			it('one product', function() {
				cashRegister.accept_prod(rice);

				expect(cashRegister.basket).to.have.length(1);
				expect(cashRegister.total_products).to.equal(1)
			});

			it('two products', function() {
				adding_two_products();

				expect(cashRegister.total_products).to.equal(2)
			});
		});

		describe('For the total quantity if there is', function() {
			
			it('only one product', function() {
				cashRegister.accept_prod(rice);

				expect(cashRegister.total_quantity).to.equal(1)
			});

			it('more than one product', function() {
				cashRegister.total_quantity = 0;
				
				adding_two_products();

				expect(cashRegister.total_quantity).to.equal(3)
			});
		});

		describe('Deleting items', function() {
			
			it('the last one added', function() {
				cashRegister.accept_prod(rice);
				cashRegister.delete_last();

				expect(cashRegister.total_products).to.equal(0);
			});

			it('by querying a product name', function() {
				adding_two_products();

				cashRegister.delete_by_name('rice');

				expect(cashRegister.total_products).to.equal(1);
				expect(cashRegister.basket).to.contain({name:'beans',price:1.25,quantity:2});
			});
		});

		describe('Getting the price', function() {
			
			it('for only one product', function() {
				cashRegister.accept_prod(rice);

	      cashRegister.process_order();

	      expect(cashRegister.total_price).to.equal(3.5)
			});

			it('for one product with a quantity of 2', function() {
				cashRegister.accept_prod(beans);

				cashRegister.process_order();

				expect(cashRegister.total_price).to.equal(2.5)
			});

			it('for two products', function() {
				var bread = new Product('bread',0.5,1);

				cashRegister.accept_prod(rice);
				cashRegister.accept_prod(bread);

				cashRegister.process_order();

				expect(cashRegister.total_price).to.equal(4)
			});

			it('for two products with different quantities', function() {

				adding_two_products();

				cashRegister.process_order();

				expect(cashRegister.total_price).to.equal(6)
			});

			describe('Recalculates the price if a product is deleted', function() {
				
				it('the last one added', function() {
					adding_two_products();

					cashRegister.total_price = 6;

					cashRegister.delete_last()

					expect(cashRegister.total_price).to.equal(3.5)
		    });

				it('by querying a name', function() {
					adding_two_products();

					cashRegister.total_price = 6;

					cashRegister.delete_by_name('rice');

					expect(cashRegister.total_price).to.equal(2.5);
		    });
			});
		});
	});
});