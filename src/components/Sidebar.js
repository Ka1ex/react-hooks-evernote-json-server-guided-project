import React from "react";
import NoteList from "./NoteList";

function Sidebar({noteArray, selecetedNoteFunction}) {
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList noteArray= {noteArray} selecetedNoteFunction={selecetedNoteFunction} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
