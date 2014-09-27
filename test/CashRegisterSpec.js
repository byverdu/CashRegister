var expect = require('chai').expect;
var CashRegister = require('../lib/CashRegister');

var cashRegister;

beforeEach(function() {
  cashRegister = new CashRegister();
})

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.count).to.equal(null);
		});

		it('can accept products', function() {
			expect(cashRegister.count).to.equal(null);

			cashRegister.processOrder('rice');

			expect(cashRegister.count).to.equal(1);
		});

		it('can accept more than one products', function() {
			expect(cashRegister.count).to.equal(null);

			cashRegister.processOrder('rice');
			cashRegister.processOrder('oil');
			cashRegister.processOrder('battery');

			expect(cashRegister.count).to.equal(3);
		});
		
	});

		it('Knows that they have a price', function() {

			expect(cashRegister.processOrder('rice',3.5)).to.deep.include.members([{item:'rice',price: 3.5}])	
			
		});
});