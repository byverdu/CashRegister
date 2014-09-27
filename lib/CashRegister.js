//Product = require('./Product')

function CashRegister(){
	this.basket = [];
	this.totalProducts;
};

//CashRegister.prototype.basket = [];

CashRegister.prototype.acceptProd = function(product) {

	this.basket.push(product);
	
	this.totalProducts = this.basket.length;
}




module.exports = CashRegister;
