//Business logic for your order

function YourOrder() {
  this.orders = [];
}

YourOrder.prototype.addOrder = function(order) {
  this.orders.push(order);
}

// Business logic for Pizza

function Pizza (toppings, size) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === 'small') {
    this.pizzaPrice += 10;
  } else if(this.size === "medium") {
    this.pizzaPrice += 13;
  } else {
    this.pizzaPrice +=16;
  }
  return this.pizzaPrice
}

//YourOrder.prototype.addOrder = function() {
  //return "Your order is a" + this.size + " pizza with" + this.toppings + ". It costs" + this.price; 
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

var myPizza = new Pizza(this.size, this.toppings, this.price);
var yourOrder = new YourOrder(this.size, this.toppings, this.price);

//function displayNewPizza(myPizzaToDisplay) {
  //var orders = myPizza;
  //var fullOrder = " ";
  //myPizzaToDisplay.orders.forEach(function(order) {
   //fullOrder += orders.toppings + orders.size + orders.price;
  //})
  //orders.html(myPizzaToDisplay);
//}

$(document).ready(function(){
  $('form#createPizza').submit(function(event) {
    event.preventDefault();
   var inputtedSize = $("input#pizzaSize").val();
   var inputtedTopping1 = $("input#topping1").val();
   var inputtedTopping2 = $("input#topping2").val();
   var inputtedTopping3 = $("input#topping3").val();
   $("input#pizzaSize").val("");
   $("input#topping1").val("");
   $("input#topping2").val("");
   $("input#topping3").val("");
   var newPizza = new Pizza (inputtedSize, inputtedTopping1, inputtedTopping2, inputtedTopping3, this.price);
   console.log(newPizza);

   $("div#results").text("size:" + inputtedSize + "toppings:" + inputtedTopping1 + inputtedTopping2 + inputtedTopping3);

   
   

  })
});