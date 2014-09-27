# Cash Register

App that runs on the node command line interface, is a recreation of a cash register.

The main functionality are creating products, adding them to the cash register, getting the total price and deleting them.

## Technologies used. 

1. TDD
1. Node.js
2. Mocha
3. Chai
4. Git
i
### How to run the tests

```javascript

cd /path/to/folder

mocha
```

### How to run the app

```javascript
cd /path/to/folder

node

var Product      = require('./lib/Product');
var CashRegister = require('./lib/CashRegister');

```

After having the classes inside that two variables you can start building objects following this API:

```javascript
var product      = new Product('name',price,quantity);
var cashRegister = new CashRegister();
```

Methods available:

```javascript
// Properties

cashRegister.basket = [];
cashRegister.total_products;
cashRegister.total_quantity;
cashRegister.total_price = 0;

// adding elements to cashRegister.basket
cashRegister.accept_prod(product);

// deleting cashRegister.basket elements

cashRegister.delete_last();
cashRegister.delete_by_name('name');

// getting the total price

cashRegister.process_order();
```





