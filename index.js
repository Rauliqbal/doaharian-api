const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

fs.readFile("./data/doa.json", "utf-8", (err, jsonString) => {
   try {
      const data = JSON.parse(jsonString);
      console.log(data);
   } catch (error) {
      console.log(error);
   }

   console.log;
});

app.get("/", (req, res) => {
   res.json({ nama: " Rauliqbal", api: "doaharian-api.vercel.app/api" });
});

app.get("/api", (req, res) => {
   res.setHeader("Content-Type", "application/json");
   res.send(fs.readFileSync("./data/doa.json", "utf-8"));
});

app.listen(port, () => {
   console.log("API Berjalan");
});

module.exports = app;
