let inventory = [];

function findProductIndex(productName) {
  productName = productName.toLowerCase();
  return inventory.findIndex(item => item.name === productName);
}


function addProduct(product) {
  let productName = product.name.toLowerCase();
  let index = findProductIndex(productName);

  if (index !== -1) {
    
    inventory[index].quantity += product.quantity;
    console.log(productName + " " + "quantity updated");
  } else {
    
    inventory.push({ name: productName, quantity: product.quantity });
    console.log(productName + " added to inventory");
  }
}


function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  let index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log("Not enough " + productName + " available, remaining pieces: " + product.quantity);
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      inventory.splice(index, 1); 
    }

    console.log("Remaining " + productName + " pieces: " + product.quantity);
  }
}

addProduct({ name: "apple", quantity: 10 });

addProduct({ name: "apple", quantity: 5 });

removeProduct("apple", 3);

removeProduct("apple", 20);

removeProduct("banana", 2);

