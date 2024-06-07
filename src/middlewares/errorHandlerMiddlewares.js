exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.statusCode || 500)
    .send(err.message || "Internal Server Error");
};

exports.notFound = (req, res, next) => {
  res.status(404).send("Not Found");
};
