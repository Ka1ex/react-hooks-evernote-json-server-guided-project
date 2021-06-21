import React, {useEffect} from "react";
import NoteItem from "./NoteItem";

function NoteList({noteArray, selecetedNoteFunction}) {
  
  return (
    
    <ul>
      {/* Render list of notes here... */}
     { noteArray.map( note => <NoteItem key={note.id} note={note} selecetedNoteFunction= {selecetedNoteFunction}/>)}
    </ul>
  )
}

export default NoteList;
