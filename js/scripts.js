//Business logic

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function () {
  if (this.size === 'small') {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 11;
  } else {
    this.price += 15;
  }

  return "Your" + this.toppings + "pizza is" + this.price;
}






// UI

var myPizza = new Pizza ([this.toppings], this.size);

$(document).ready(function(){
  $('form#createPizza').submit(function(event) {
    event.preventDefault();
    varjghg 
  })
});