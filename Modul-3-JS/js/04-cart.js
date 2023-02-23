/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items
  },
  add(product) {
    // console.table(this.items); 

    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log(quantity);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
     
    this.items.push(newProduct)
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
    const { name, price } = items[i];
      // console.log(`${name}: ${price} (${i})`);
  
      if (productName === name) {
        // console.log(`Нашли элемент которы нужно удалить: ${productName}: ${price} (${i})`);

        items.splice(i, 1)
      }
}

  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    // console.log(items);
    let total = 0;
    for (const { price, quantity } of items) {
      // console.log(price);
      total += price * quantity;
    }
    return total
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
        return;
      }
    }
  
  },
};

// console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍋');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());