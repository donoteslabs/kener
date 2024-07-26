import { handler } from "./build/handler.js";
import express from "express";
import { STATUS_OK } from "./scripts/check.js";
import { Startup } from "./scripts/startup.js";
import sitemap from "./scripts/sitemap.js";
import https from "https";
import fs from "fs";
const PORT = process.env.PORT || 3000;
console.log("STATUS_OK", STATUS_OK);
Startup();

const app = express();
app.use((req, res, next) => {
	if (req.path.startsWith("/embed")) {
		res.setHeader("X-Frame-Options", "None");
	}
	next();
});
app.get("/healthcheck", (req, res) => {
	res.end("ok");
});

app.get("/sitemap.xml", (req, res) => {
	res.setHeader("Content-Type", "application/xml");
	res.end(sitemap);
});

app.use(handler);

// Read SSL certificate files
const options = {
	key: fs.readFileSync('/etc/letsencrypt/live/donotes-server.com/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/donotes-server.com/fullchain.pem'),
};

// Create an HTTPS server
https.createServer(options, app).listen(PORT, () => {
	console.log("Kener is running on port " + PORT + "!");
});
