const router = require("express").Router();
const { createNewNote, updateNoteData } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let result = notes.filter((note) => note.id === req.params.id)[0];
  console.log(result);
  if (result) {
    console.log("good");
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  // generating unique ID
  const idList = [];

  notes.forEach((note, index) => {
    if (Number(notes[index].id)) {
      idList.push(Number(notes[index].id));
    } else {
      idList.push(0);
    }
  });

  console.log(idList);

  req.body.id = String(Math.max(...idList) + 1);

  console.log(req.body);

  if (!req.body) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const noteData = createNewNote(req.body, notes);
    res.json(noteData);
  }
});

router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  console.log(notes);
  const noteIndex = notes.findIndex((note) => note.id === id);

  notes.splice(noteIndex, 1);

  if (!req.body) {
    res.status(400).send("Note not found.");
  } else {
    const updatedNotes = updateNoteData(notes);
    console.log(`Deleteing note id: ${req.params.id}`);
    res.send(updatedNotes);
  }
});

module.exports = router;
