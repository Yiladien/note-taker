const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  // console.log(JSON.stringify({ notes: notesArray }, null, 2));

  updateNoteData(notesArray);

  // fs.writeFileSync(
  //   path.join(__dirname, "../db/db.json"),
  //   JSON.stringify({ notes: notesArray }, null, 2)
  // );
  return note;
}

function updateNoteData(notesArray) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = {
  createNewNote,
  updateNoteData,
};
