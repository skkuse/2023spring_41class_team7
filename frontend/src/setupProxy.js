const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "user/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
      ws: true,
      changeOrigin: true,
    })
  );
  app.use(
    "course/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
      ws: true,
      changeOrigin: true,
    })
  );
  app.use(
    "learn/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
      ws: true,
      changeOrigin: true,
    })
  );
  app.use(
    "feedback/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
      ws: true,
      changeOrigin: true,
    })
  );
};
