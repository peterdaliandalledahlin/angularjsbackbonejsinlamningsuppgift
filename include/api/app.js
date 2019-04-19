const express = require('express');
const app = express();

// CORS = Cross Origin Resource Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
});

// http://localhost:3001/api/products
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// http://locahost:3001/
app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "Kolla dokumentationen för att hitta rätt routes"
    });
});

module.exports = app;