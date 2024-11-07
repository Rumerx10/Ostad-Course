const express = require("express");
const app = express();

const blogRouter = require("./routes/blogRouter");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname+'/views/blog.html');
});

app.use(blogRouter);




app.use((req, res, next) => {
  res.status(404).json({
    message: "Page not found.",
  });
});

app.use((err, req, res, next)=>{
  res.status(500).send({
    message:"Server is not found. Please try again later.",
    error: err.message
  })
})

module.exports = app;
