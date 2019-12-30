require("dotenv").config();
const https = require("https");
const fs = require("fs");
const livereload = require("livereload");

const isSecure = process.argv.includes("--secure");
const sslKeyPath = process.env.SSL_KEY_PATH;
const sslCertPath = process.env.SSL_CERT_PATH;

if (isSecure && (!sslKeyPath || !sslCertPath)) {
  throw new Error(
    "Make sure SSL_KEY_PATH and SSL_CERT_PATH are set in your environment."
  );
}

const server = livereload.createServer({
  exts: ["twig", "html"],
  https: isSecure
    ? https.createServer({
        key: fs.readFileSync(process.env.SSL_KEY_PATH),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH)
      })
    : null
});

console.log("Start livereload server");

return server.watch(`${__dirname}/templates`);
