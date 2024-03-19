let products = [
    {
        name: "Sprinkles",
        price: 2,
        quantity: 0
    },
    {
        name: "Chocolate Chips",
        price: 3,
        quantity: 0
    },
    {
        name: "Gummies",
        price: 2,
        quantity: 0
    },
    {
        name: "Waffle Cone",
        price: 3,
        quantity: 0
    },
    {
        name: "Waffle Bowl",
        price: 4,
        quantity: 0
    },
    {
        name: "Dipped Cone",
        price: 5,
        quantity: 0
    },
    {
        name: "Vanilla",
        price: 3,
        quantity: 0
    },
    {
        name: "Chocolate",
        price: 4,
        quantity: 0
    },
    {
        name: "Strawberry",
        price: 4,
        quantity: 0
    }
]

function findProduct(productName) {
    for (let i = 0; i < products.length; i++) {
        let product = products[i]

        if (product.name == productName) {
            return product
        }
    }
}

function changeProduct(productName, number) {
    let product = findProduct(productName)


    product.quantity += number
    console.log(product)
    drawCart()
}

function drawCart() {
    let content = ''
    let total = 0

    for (let i = 0; i < products.length; i++) {
        let product = products[i]

        if (product.quantity > 0)
            content += `<p>
        ${product.name} ${product.quantity}x $${(product.price * product.quantity).toFixed(2)}
        <button class="btn btn-outline-danger" onclick="changeProduct('${product.name}', -1)"><i class="mdi mdi-delete-circle-outline"></i></button>
        </p>`
        total += product.quantity * product.price
    }
    let cartItemsElm = document.getElementById('cartContent')
    cartItemsElm.innerHTML = content

    let cartTotal = document.getElementById('cartTotal')
    cartTotal.innerHTML = `$${total.toFixed(2)}`
}