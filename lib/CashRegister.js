/* CashRegister Class */

function CashRegister(){
	this.basket = [];
	this.total_products;
	this.total_quantity;
	this.total_price = 0;
};

CashRegister.prototype.accept_prod = function(product) {

	this.basket.push(product);

	this.total_products = this.basket.length;

	this._get_quantity();
}

CashRegister.prototype._get_quantity = function() {
	this.total_quantity = 0;

	for(var i=0;i<this.basket.length;i++) this.total_quantity += this.basket[i]['quantity'];

	return this.total_quantity;
}

CashRegister.prototype.delete_last = function() {
	var deleted = this.basket.pop();

	this.total_price = this.total_price - (deleted['price']*deleted['quantity']);

	this.total_products = this.total_products -1;

	return this.basket;
}

CashRegister.prototype.delete_by_name = function(query) {

	var index, deleted;

	for(index=0;index<this.basket.length;index++){

		if(this.basket[index]['name'] === query){

			deleted = this.basket.splice(index,1);

			this.total_price = (this.total_price - (deleted[0]['price']*deleted[0]['quantity']));

			this.total_products = this.total_products -1;
			
			return this.basket;
		}
	}
}

CashRegister.prototype.process_order = function() {

		for(var i=0;i<this.basket.length;i++){

			this.total_price += this.basket[i]['price']*this.basket[i]['quantity'];
		}

		return this.total_price
}

CashRegister.prototype.search_by_name = function(query) {
	
	for(var i=0;i<this.basket.length;i++){

		if(this.basket[i]['name']===query) return this.basket[i];
	}
}


module.exports = CashRegister;
