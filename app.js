const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .json({
      message: "Hello World"
    });
})


app.use((error, req, res, next) => {
  res.status(500).json({ message: error. message })
})

app.listen(PORT, () =>{
  console.log(`Server running at ${PORT}`);
})