import express from "express";
const app = express();
// app.use();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
});

app.listen(port, () => {
  console.log(`Server Running at port: http://localhost:${port}`);
});
