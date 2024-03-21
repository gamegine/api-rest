const express = require("express");
const router = express.Router();

// data = [{id:int,data...}]
let data = [
  {
    id: 1,
    name: "name",
  },
];
let id = 1;

// api CRUD

// create
router.post("/", (req, res) => {
  id++;
  data.push({ id, ...req.body });
  res.status(200).json(data);
});

// read
router.get("/", (req, res) => {
  res.status(200).json(data);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((e) => e.id == id);
  if (index != -1) res.status(200).json(data[index]);
  else res.status(404).json({ code: 404, err: "Not Found" });
});
// update
const update = (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((e) => e.id == id);
  if (index != -1) {
    data[index] = { ...data[index], ...req.body, id };
    res.status(200).json(data[index]);
  } else res.status(404).json({ code: 404, err: "Not Found" });
};
router.put("/:id", update);
router.patch("/:id", update);
router.post("/:id", update);

// delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((e) => e.id == id);
  if (index != -1) {
    data.splice(index, 1);
    res.status(200).json(data);
  } else res.status(404).json({ code: 404, err: "Not Found" });
});

module.exports = router;
