const express = require("express");
const apirouter = require("./api");
const app = express();

const PORT = process.env.PORT || 3000;
const limit = process.env.LIMIT;

//Enabling json reads and headers check
app.use(express.json({ limit }));
app.use(express.urlencoded({ extended: true }));

// logger middleware
app.use((req, res, next) => {
  console.log(req.method, req.hostname, req.path);
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", apirouter);

//Running the server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
