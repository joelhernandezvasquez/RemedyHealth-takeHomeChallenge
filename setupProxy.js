const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
 

  app.use(createProxyMiddleware('/api/**',{target:'http://localhost:3000'}))
  app.use(createProxyMiddleware('/api/guestbook',{target:'http://localhost:3000'}))
  app.use(createProxyMiddleware('/guestbook',{target:'http://localhost:3000'}))
  

  
};