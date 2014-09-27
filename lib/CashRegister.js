//Product = require('./Product')

function CashRegister(){
	this.basket = [];
	this.total_products = 0;
	this.total_quantity;
};

//CashRegister.prototype.basket = [];

CashRegister.prototype.acceptProd = function(product) {

	this.basket.push(product);

	this.total_products = this.basket.length;

	this._get_quantity();
}

CashRegister.prototype._get_quantity = function() {
	this.total_quantity = 0;

	for(var i=0;i<this.basket.length;i++){

		this.total_quantity += this.basket[i]['quantity'];
	}
}

CashRegister.prototype.delete_last = function() {
	this.basket.pop();
	this.total_products = this.total_products -1
}

CashRegister.prototype.delete_by_name = function(query) {

	for(var i=0;i<this.basket.length;i++){

		if(this.basket[i]['name'] === query){

			var index = i;

			this.basket.splice(index,1);

			this.total_products = this.total_products -1
			
			return this.basket
		}
	}
}




module.exports = CashRegister;
