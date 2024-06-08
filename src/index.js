const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const imageRoutes = require("./routes/imageRoutes");

const { PORT } = require("./config");
const {
  errorHandler,
  notFound,
} = require("./middlewares/errorHandlerMiddlewares");

const app = express();

// Server setup
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} URL: http://localhost:${PORT}`);
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/images", imageRoutes);

// Error handling middlewares
app.use(notFound);

// express error handler
app.use(errorHandler);
