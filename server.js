const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const Books = require("./schema")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Define API routes here

app.get("/api/books", function(req,res){
  Books.find({}).then(function(googlebooks){
    res.json(googlebooks);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    res.json(err);
  });
})

app.post("/api/books", function(req,res){
  Books.create(req.body)
  .then(function(dbUser) {
    // If saved successfully, send the the new User document to the client
    res.json(dbUser);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    res.json(err);
  });
})

app.delete("/api/books/:id", function(req,res){
  Books.findByIdAndDelete(req.params, function(error,book){
    if(error)
      res.send({
        status: 301,
      message: `could not delete ${req.params.id}`})
    else
      res.send({
        status: 200,
      message: `deleted ${req.params.id} successfully!`})
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
