var expect       = require('chai').expect;
var Product      = require('../lib/Product');    
var CashRegister = require('../lib/CashRegister');

var cashRegister;
var product;

beforeEach(function() {
  cashRegister = new CashRegister();
  product      = new Product('rice',3.5,1);
})

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.BASKET).to.have.length(0);
		});

		it('can accept products', function() {
			cashRegister.processOrder(product);

			expect(cashRegister.BASKET).to.have.length(1)
		});

		// it('can accept products', function() {
		// 	expect(cashRegister.count).to.equal(null);

		// 	cashRegister.processOrder('rice',3.5,2);

		// 	expect(cashRegister.count).to.equal(1);
		// });

		// xit('can accept more than one products', function() {
		// 	expect(cashRegister.count).to.equal(null);

		// 	cashRegister.processOrder('rice');
		// 	cashRegister.processOrder('oil');
		// 	cashRegister.processOrder('battery');

		// 	expect(cashRegister.count).to.equal(3);
		// });
		
	});

		xit('Knows that they have a price', function() {

			expect(cashRegister.processOrder('rice',3.5)).to.deep.include.members([{item:'rice',price: 3.5}])	
			
		});
});