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
var yourOrder = new YourOrder();

$(document).ready(function(){
  $('form#createPizza').submit(function(event) {
    event.preventDefault();
   var inputtedSize = $("input#pizzaSize").val();
   var inputtedTopping1 = $("input#topping1").val();
   var inputtedTopping2 = $("input#topping2").val();
   var inputtedTopping3 = $("input#topping3").val();
   var newPizza = new Pizza (inputtedSize, inputtedTopping1, inputtedTopping2, inputtedTopping3);
   yourOrder.addOrder(newPizza);
   console.log(inputtedTopping1);
   console.log(inputtedTopping2);
   console.log(inputtedTopping3);
   console.log(inputtedSize);
   console.log(newPizza);
   

  })
});