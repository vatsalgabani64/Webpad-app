import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../App.css";

function App() {

  const [notes,setNotes] = new useState([]);
  
  function addItem(note){
    console.log("Add");
    setNotes((items) => {
      return ([...items,note]);
    });
    console.log("Added");
  }

  function deleteItem(key){
    console.log("del " + key);
    setNotes((notes) => {
      return notes.filter((item,index)=>{
        return index !== key;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addItem= {addItem} />
      {notes.map((noteItem,index) => {
        return <Note key = {index} id={index} onDelete = {deleteItem}  title = {noteItem.title} content={noteItem.content} />
      })
      }
      <Footer />
    </div>
  );
}

export default App;
