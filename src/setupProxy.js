const { createProxyMiddleware } = require("http-proxy-middleware");
const API_BASE_URL = "http://18.212.187.153:8000"
const px = createProxyMiddleware({ target: API_BASE_URL, changeOrigin: true })
module.exports = (app) => {
    app.use("/create-app", px);
    app.use("/upload-app", px);
    app.use("/upload-app", px);
    app.use("/initialize-build/*", px);
    app.use("/build/*", px);
    app.use("/up/*", px);
    app.use("/down/*", px);
}