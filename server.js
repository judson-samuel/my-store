const express = require('express');
const app = express();
const PORT = 3000;

// Tell the server to look in a folder called 'public' for web pages
app.use(express.static('public'));

// A fake list of products for our shop
const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
    { id: 3, name: 'Minimalist Backpack', price: 45.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' }
];

// Send the products to the browser when requested
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});