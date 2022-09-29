const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  console.log(notesArray);
  const note = body;
  notesArray.push(note);

  console.log(JSON.stringify({ notes: notesArray }, null, 2));

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

module.exports = {
  createNewNote,
};
