const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Configura os middlewares padrão do json-server
server.use(middlewares);

// Reescrita de rotas, se necessário (ex.: /api/* -> /*)
server.use(jsonServer.rewriter({
  "/api/*": "/$1"
}));

// Usa o router do json-server
server.use(router);

// Exporta como uma função serverless para a Vercel
module.exports = (req, res) => {
  server.handle(req, res);
};