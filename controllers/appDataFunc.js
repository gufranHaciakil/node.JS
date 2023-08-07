
const Article = require("../models/articleSchema");





const article_html_get = (req, res) => {
  Article.find()
    .then((result) => {
      res.render("index", { myData: result });
    })
    .catch((err) => {
      console.log(err);
    });


}

const article_dataDetails_get = (req, res) => {
  const ID = req.params.idd; // هاد الكود مسؤل عن انو بجيب الفايبل يلي بعد المسار
  Article.findById(ID)
    .then((result) => {
      res.render("articleDetails", { opjMyData: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

const article_dataDetails_delete = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ myLink: "/html" });
    })
    .catch((err) => {
      console.log(err);
    });
}

const article_html_post = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((result) => {
      res.redirect("/html");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  article_html_get
  , article_dataDetails_get
  , article_dataDetails_delete
  , article_html_post
}
