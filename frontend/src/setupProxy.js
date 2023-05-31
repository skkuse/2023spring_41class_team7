const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/user/auth/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
      changeOrigin: true,
    })
  );
};
