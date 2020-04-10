//Business logic for your order

function YourOrder() {
  this.orders = [];
}

YourOrder.prototype.addOrder = function(order) {
  this.orders.push(order);
}

// Business logic for Pizza

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.fullOrder = function() {
  return "Your order is a" + this.size + " pizza with" + this.toppings + ". It costs" + this.price; 
}

//Pizza.prototype.pizzaPrice = function () {
  //if (this.size === 'small') {
    //this.price += 8;
  //} else if (this.size === "medium") {
    //this.price += 11;
  //} else {
   // this.price += 15;
  //}

  //return this.price;
//}


// UI

var myPizza = new Pizza(this.toppings, this.size, this.price);

$(document).ready(function(){
  $('form#createPizza').submit(function(event) {
    event.preventDefault();
    //var toppings = $("select#pizzaToppings").val();
    //var size = $("select#pizzaSize").val();
   // $("select#pizzaToppings").val();
    //$("select#pizzaSize").val();
    //console.log(size);
    //console.log(toppings);


  })
});