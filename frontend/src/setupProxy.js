const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://api:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
