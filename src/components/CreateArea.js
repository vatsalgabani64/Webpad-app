import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note,setNote] =  new useState({title:"",content:""});
  const [isZoom,setIsZoom] = new useState(false);


  function handleChange(event){
    const {name,value} = event.target;
    console.log(name+ " " + value);
    console.log(note);
    setNote(prevValue => {
      return {...prevValue, [name]: value};
    })
    console.log(note);
  }

  function handleClick(){
    setIsZoom(true);
  }

  function submitNote(event){
    props.addItem(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isZoom && <input onChange = {handleChange}  value = {note.title} name="title" placeholder="Title" />}
        <textarea onChange = {handleChange} onClick = {handleClick} value = {note.content} name="content" placeholder="Take a note..." rows={isZoom?3:1} />
        <Zoom in={isZoom}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

