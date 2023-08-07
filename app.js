const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const appDataFunc = require("./controllers/appDataFunc")
// const helmet = require("helmet");   // الهيلميت بتضيفلنا باكيجات لحمايه الموقع


mongoose
  .connect(
    "mongodb+srv://gufranhaciakil:E3we2E3we2@cluster0.jnzzl1y.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



// app.use(helmet());

app.get("/", (req, res) => {
  res.send(`<a style="font-size:30px;" href="/html"> Html Page ♥ </a> 
  `);
});


app.get("/addnewArticel", (req, res) => {
  res.render("addArticle");
});


// Functions in appDataFunc Folder
app.get("/html", appDataFunc.article_html_get);

app.get("/dataDetails/:idd", appDataFunc.article_dataDetails_get);

app.delete("/dataDetails/:id", appDataFunc.article_dataDetails_delete);

app.post("/html", appDataFunc.article_html_post);
