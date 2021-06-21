import React from "react";

function NoteItem({note, selecetedNoteFunction, editableNote}) {
  let trunicateNote = (message) => {
    let wordsArray = message.split(" ")
    return wordsArray.slice(0, 20).join(' ')
  }
  let handleEvent = () =>{
    selecetedNoteFunction(note.id)
    
  }
  let clickHandle = () => {
    editableNote()
  }
  return (
    <li onClick= {() => handleEvent()}>
      <h2>{note.title}</h2>
      <p>{trunicateNote(note.body)}</p>
      <button onClick={() => clickHandle}>Edit</button>
    </li>
  );
}

export default NoteItem;



// 6128174139 cindy