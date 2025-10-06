# Inventory-Management-Program

This project is a simple inventory management program written in JavaScript.
It allows you to manage products in an inventory by adding, updating, and removing them.

🚀 Features

Add new products to the inventory

Update product quantity automatically if it already exists

Remove products or decrease their quantity

Show warnings if product not found or not enough quantity

🧩 How It Works

The program stores all products in an array called inventory.

Each product has two properties: a name and a quantity.

When you add a product that already exists, the quantity increases.

When you remove a product, its quantity decreases or gets deleted if it reaches zero.

The program logs messages to show what happens after each action.

🧠 Example Actions

Add a product (example: apple with 10 quantity).

Add the same product again (example: apple with 5 more quantity).

Remove some quantity (example: remove 3 apples).

Try to remove more than available (it will show a warning).

Try to remove a product that doesn’t exist (it will show “not found”).

🧾 Example Output

“apple added to inventory”

“apple quantity updated”

“Remaining apple pieces: 12”

“Not enough apple available, remaining pieces: 12”

“banana not found”
