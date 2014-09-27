/* CashRegister Class */

function CashRegister(){
	this.basket = [];
	this.total_products;
	this.total_quantity;
	this.total_price;
};

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

	for(var index=0;index<this.basket.length;index++){

		if(this.basket[index]['name'] === query){

			this.basket.splice(index,1);

			this.total_products = this.total_products -1;
			
			return this.basket;
		}
	}
}

CashRegister.prototype.processOrder = function() {
		this.total_price = 0;

		for(var i=0;i<this.basket.length;i++){

			this.total_price += this.basket[i]['price']*this.basket[i]['quantity'];
		}
}




module.exports = CashRegister;
