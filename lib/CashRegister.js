function CashRegister(){
	this.count = null;
};

CashRegister.prototype.BASKET = [];

CashRegister.prototype.processOrder = function(product) {
	this.count += 1
	
	return this.BASKET.push(product);
}


module.exports = CashRegister;
