import React, { useEffect, useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [noteArray, setNoteArray] = useState([])
  const [selectedNote, setSelectedNote] = useState([])
  const [note, setNote] = useState(null)
  const [editNote, SetEditNote] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/notes`)
    .then(res => res.json())
    .then(notes => setNoteArray(notes))
  },[]
  )
  let settingNote = () => {
  setNote(noteArray[selectedNote - 1])
  }
  let selecetedNoteFunction = (noteID) => {
      setSelectedNote(noteID)
      settingNote()
  }
  let editableNote = () => {
    SetEditNote(!editNote)
    console.log(editNote)
}
  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar 
          noteArray={noteArray} 
          selecetedNoteFunction={selecetedNoteFunction}
          editNote={editableNote}
        />
        <Content note= {note}/>
      </div>
    </>
  );
}

export default NoteContainer;
