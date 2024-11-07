const createBlog = (req, res) => {
  res.status(201).send("Blog created successfully");
};

const readBlog = (req, res) => {
  res.status(200).send("Blog read successfully");
};

const updateBlog = (req, res) => {
  res.status(200).send("Blog update successfully");
};

const deleteBlog = (req, res) => {
  res.status(200).send("Blog delete successfully");
};

module.exports = { createBlog, readBlog, updateBlog, deleteBlog };
