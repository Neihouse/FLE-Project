const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the API Gateway routes and proxy configurations
app.use('/api/service1', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/service2', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
// Add more services as needed

app.listen(3000, () => {
  console.log('API Gateway is running on port 3000');
});

module.exports = app;
