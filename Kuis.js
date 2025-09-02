const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
  // Menggunakan filter untuk pilih produk berdasarkan kategori
  return products.filter(product => product.category === category);
}

function findProductById(products, id) {
  // Menggunakan find untuk mencari produk berdasarkan ID
  return products.find(product => product.id === id);
}

function calculateTotalPrice(products) {
  // Menggunakan reduce untuk menghitung total harga
  return products.reduce((total, product) => total + product.price, 0);
}

function applyDiscount(products, discount) {
  // Menggunakan map untuk membuat array baru dengan harga terdiskon
  return products.map(product => ({
    ...product,
    price: product.price - (product.price * discount / 100)
  }));
}

// Testing
console.log(getProductsByCategory(sampleProducts, 'Electronics'));
// 👉 [{ id: 1, name: 'Laptop', ...}, { id: 2, name: 'Phone', ...}]

console.log(calculateTotalPrice(sampleProducts));
// 👉 1830

console.log(applyDiscount(sampleProducts, 10));
// 👉 Semua produk dengan harga turun 10%

console.log(findProductById(sampleProducts, 3));
// 👉 { id: 3, name: 'Shirt', category: 'Apparel', price: 50 }
