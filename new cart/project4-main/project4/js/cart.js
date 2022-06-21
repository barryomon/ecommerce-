// Get all cart items from storage
const getCartItemsFromStorage = () => {
    let cart;
    if (localStorage.getItem("cart") === null) cart = [];
    else cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
  };
  
  // Display all cart items in UI
  const displayCartItemsInUI = () => {
    const cart = getCartItemsFromStorage();
    cart.forEach((item) => {
      addCartItemToUI(item.title, item.price, item.imageSrc, item.quantity);
    });
    updateCartTotal();
  };
  
  // Add Cart Item to UI
  const addCartItemToUI = (title, price, imageSrc, quantity) => {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already added to the cart");
        return;
      }
    }
    var cartRowContents = `
          <div class="cart-item cart-column">
              <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="${quantity}">
              <button class="btn btn-danger" type="button">X</button>
          </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  };
  
  // Add Cart Item to Local Storagae
  
  // Remove cart items from UI
  const removeCartItemFromUI = (event) => {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  };
  
  const removeCartItemFromStorage = (event) => {
    let cart = getCartItemsFromStorage();
    const cartItem = event.target.parentElement.parentElement;
    const title = cartItem.getElementsByClassName("cart-item-title")[0].innerText;
    cart = cart.filter((item) => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
  
  function ready() {
    displayCartItemsInUI();
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", removeCartItem);
    }
  
    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
  
    document
      .getElementsByClassName("btn-purchase")[0]
      .addEventListener("click", purchaseClicked);
  }
  
  function purchaseClicked() {
    swal({
      title: "Come Again!",
      text: "Thank you for your purchase!",
      icon: "success",
    });
    localStorage.setItem("cart", JSON.stringify([]));
    document.getElementsByClassName("cart-items")[0].innerHTML = "";
    updateCartTotal();
  }
  
  function removeCartItem(event) {
    removeCartItemFromUI(event);
    removeCartItemFromStorage(event);
    updateCartTotal();
  }
  
  function quantityChanged(event) {
    const quantityInput = event.target;
    const cartItem = event.target.parentElement.parentElement;
    const title = cartItem.getElementsByClassName("cart-item-title")[0].innerText;
    cart = getCartItemsFromStorage();
    cart.forEach((item) => {
      if (item.title == title) {
        item.quantity = +quantityInput.value;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartTotal();
  }
  
  function updateCartTotal() {
    const cart = getCartItemsFromStorage();
    let total = 0;
  
    cart.forEach((item) => {
      const price = parseFloat(item.price.slice(1));
      total += price * item.quantity;
    });
  
    // total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "₦" + total;
  }
  