const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "api/",
];

module.exports = function (app) {
    // const appProxy = createProxyMiddleware("api/", {
    //     target: 'https://localhost:7130/',
    //     secure: true
    // });
    const appProxy = createProxyMiddleware('https://localhost:7130/api');

    app.use(appProxy);
};
