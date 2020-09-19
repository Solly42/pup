const puppeteer = require("puppeteer");
const { get } = require("request");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("E O TREM BALAAAA");
});

app.get("/alt", function (res, res) {
  res.send("Pagina dos ALT");
});

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost8081");
});
