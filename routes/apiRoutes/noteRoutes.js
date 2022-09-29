const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  console.log(notes);
  let results = notes;

  res.json(results);
});

router.post("/notes", (req, res) => {
  if (req.body) {
    const note = createNewNote(req.body, notes);
    res.json(note);
  } else {
    res.status(400).send("The note is not properly formatted.");
  }
});

module.exports = router;
