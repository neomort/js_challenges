// This application has a list of items that the user needs to be able to 
// add to their cart.  These can be hardcoded in your html or you can use 
// js to render them. When the user clicks on the add to cart button, 
// it should add the item to the cart. This application doesn't need to be 
// fancy at all though if you finish ahead of time you can style it more. 
let items = ["beans","tortillas","phone" ]
let cart = []

//draws a grid/list of items
//when click "add to cart" naxt to item move selected item from the items aray to the cart array
//function should be called when onclick
//should be separate for every individual item 

//function takses item number corresponding to item clicked 
function itemToCart(){
items.splice();
cart.push();
}
function render(){
  htmlString = `
  <div> hi </div>
  <div onclick='itemToCart()'>${item}--${cart}

  <div>
  `;
  document.getElementById("app").innerHTML = htmlString;
}

render();