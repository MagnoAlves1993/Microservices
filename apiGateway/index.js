const app = require('express')();
const httpProxy = require('express-http-proxy');
const port = 3000;

const {
    USERS_API_URL,
    PRODUCTS_API_URL
} = require('./urls');

const userServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway Api with node'));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next))
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next))

app.listen(port, () => console.log(`Example apiGateway on port ${port}`))