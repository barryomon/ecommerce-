const getCartItemsFromStorage = () => {
    let cart;
    if (localStorage.getItem("cart") === null) cart = [];
    else cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
  };
  
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
  
  function ready() {
    var addToCartButtons = document.getElementsByClassName("buy");
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }
  }
  
  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
    var quantity = 1;
    addCartItemToStorage(title, price, imageSrc, quantity);
  }
  
  const addCartItemToStorage = (title, price, imageSrc, quantity) => {
    cart = getCartItemsFromStorage();
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title == title) {
        return;
      }
    }
    const item = { title, price, imageSrc, quantity };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  