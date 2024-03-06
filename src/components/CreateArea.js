import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note,setNote] =  new useState({title:"",content:""});
  // const [content,setContent] = new useState("");
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
    // const newItem = {t: title,c: content};
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


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
