//Business logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeLarge = function () {
  return this + "13.99"
};






// UI

var myPizza = new Pizza ([toppings: any, size: any]);

$(document).ready(function(){
  $('form#createPizza').submit(function(event) {
    event.preventDefault();
    varjghg 
  }
}