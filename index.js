const express = require("express");
const apirouter = require("./api");
const app = express();

const PORT = 3000;

//Enabling json reads and headers check
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", apirouter);

//Running the server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
