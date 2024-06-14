
const productsData = [
    { name: "Sample Product 1", image: "sample1.jpg", category: "Category 1", price: 100 },
    { name: "Sample Product 2", image: "sample2.jpg", category: "Category 2", price: 200 },
    { name: "Sample Product 3", image: "sample3.jpg", category: "Category 3", price: 150 },
];

function displayProducts() {
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";
    productsData.forEach(product => {
        const row = `
            <tr>
                <td>${product.name}</td>
                <td><img src="${product.image}" alt="${product.name}" class="product-image"></td>
                <td>${product.category}</td>
                <td>$${product.price}</td>
                <td>
                    <button class="edit-btn"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function addProduct(name, image, category, price) {
    productsData.push({ name, image, category, price });
    displayProducts();
}

function sortProducts() {
    productsData.sort((a, b) => a.price - b.price);
    displayProducts();
}

document.getElementById("add-product-btn").addEventListener("click", () => {
    document.getElementById("add-product-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("add-product-modal").style.display = "none";
});

document.getElementById("sort-btn").addEventListener("click", sortProducts);

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = document.getElementById("product-name").value;
    const productImage = document.getElementById("product-image").value;
    const productCategory = document.getElementById("product-category").value;
    const productPrice = parseInt(document.getElementById("product-price").value);
    addProduct(productName, productImage, productCategory, productPrice);
    document.getElementById("add-product-modal").style.display = "none";
});

displayProducts();
