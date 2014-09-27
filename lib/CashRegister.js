function CashRegister(){
	this.count = null;
};

CashRegister.prototype.BASKET = [];

CashRegister.prototype.processOrder = function(product,value) {
	this.count += 1
	
	return this.BASKET.push({item: product, price: value});
}


module.exports = CashRegister;
