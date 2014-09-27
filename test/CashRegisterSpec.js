var expect = require('chai').expect;
var CashRegister = require('../lib/CashRegister');

var cashRegister;

beforeEach(function() {
  cashRegister = new CashRegister();
})

describe('CashRegister', function() {

	describe('Counting products', function() {
		
		it('starts with 0 products', function() {
			expect(cashRegister.count).to.equal(0)
		});
	});
});