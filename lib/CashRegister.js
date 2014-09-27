Product = require('./Product')

function CashRegister(){
	this.count = null;
};

CashRegister.prototype.BASKET = [];

CashRegister.prototype.processOrder = function(name,price,quantity) {
	this.count += 1
	
	var product = new Product(name,price,quantity)

	return this.BASKET.push(product);
}




module.exports = CashRegister;
