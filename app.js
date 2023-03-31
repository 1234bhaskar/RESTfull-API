const express = require("express");
const app = express();

const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/wikiDB", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connect to Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const articlSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articlSchema);

/*  GET Method
app.get("/articles", function (req, res) {
  Article.find().then(function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

*/

/*
app.get("/articles", function (req, res) {
  Article.find().then(function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});
*/

/* POST Method
app.post("/articles", function (req, res) {
  // console.log(req.body.title);
  // console.log(req.body.content);

  const newData = new Article({
    title: req.body.title,
    content: req.body.content,
  });
  newData.save().then(function (err) {
    if (!err) {
      res.send("Successfully Added to the DataBase.");
    } else {
      res.send(err);
    }
  });
  //(function (err) {
  //   if (!err) {
  //     res.send("Successfully Added to th DataBase.");
  //   } else {
  //     res.send(err);
  //   }
  // });
});
*/

////////////////////////chained Routes///////////////////////////////
/*
app
  .route("/articles")
  .get(function (req, res) {
    Article.find().then(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    // console.log(req.body.title);
    // console.log(req.body.content);

    const newData = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newData.save().then(function (err) {
      if (!err) {
        res.send("Successfully Added to the DataBase.");
      } else {
        res.send(err);
      }
    });
    (function (err) {
      if (!err) {
        res.send("Successfully Added to th DataBase.");
      } else {
        res.send(err);
      }
    });
  });

  */

/*

app.route("articles/:articleTitle").get(async function (req, res) {
  await Article.findOne({ title: req.params.articleTitle }).function (
    err,
    foundArticles
  ) {
    if (foundArticles) {
      res.send(foundArticles);
    } else {
      res.send("Nothing Found");
    }
  };
});

*/

///////////////////////POST Method///////////////

app.post("/6pp", async (req, res) => {
  const articles = await Article.create(req.body);

  res.status(200).json({
    success: true,
    articles,
  });
});

/////////////////GET Method//////////////////////////

app.get("/get/6pp", async (req, res) => {
  const articles = await Article.find();

  res.status(200).json({ success: true, articles });
});

//////////////////////////PUT Method///////////////////
app.put("/update/6pp/:id", async (req, res) => {
  let articles = await Article.findById(req.params.id);

  articles = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    articles,
  });
});

//////////////////////////DELETE Method/////////////////////

app.delete("/delete/6pp/:id", async (req, res) => {
  const articles = await Article.findById(req.params.id);

  if (!articles) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await articles.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product successfully deleted",
  });
});
app.listen(3000, () => {
  console.log("you are on server 3000");
});

/**
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
 */
