document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('add-product-form');
    const productList = document.getElementById('products');

    let products = [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productItem = document.createElement('li');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            productList.appendChild(productItem);
        });
    }

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productDescription = document.getElementById('product-description').value;
        const productImage = document.getElementById('product-image').value;

        const newProduct = {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: productImage
        };

        products.push(newProduct);
        renderProducts();

        // Clear form
        productForm.reset();
    });

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            products.splice(index, 1);
            renderProducts();
        }
    });
});
