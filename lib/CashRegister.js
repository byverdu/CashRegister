//Product = require('./Product')

function CashRegister(){};

CashRegister.prototype.BASKET = [];

CashRegister.prototype.processOrder = function(product) {
// 	this.count += 1
	
// 	var product = new Product(name,price,quantity)

return this.BASKET.push(product);
}




module.exports = CashRegister;
