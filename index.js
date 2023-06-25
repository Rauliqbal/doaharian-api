const express = require("express");
const fs = require("fs");
const dataFile = fs.readFileSync("./data/doa.json", "utf-8");

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
   res.send(dataFile);
});

app.listen(port, () => {
   console.log("API Berjalan");
});
