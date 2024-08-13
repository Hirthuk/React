import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to hold the list of notes
  const [initalValue, finalValue] = React.useState([]);

  // Function to add a new note to the list
  function addItem(getValue) {
    finalValue((preValue) => {
      return [...preValue, getValue];
    });
  }

  // Function to delete a note from the list based on index
  function deleteItem(id) {
    finalValue(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // Logging the current list of notes
  console.log(initalValue);

  return (
    <div>
      <Header />
      {/* CreateArea component to add new notes */}
      <CreateArea setFunction={addItem} />
      {/* Mapping through the list of notes and rendering Note components */}
      {initalValue.map((todoItem, index) => (
        <Note
          key={index} // Using index as key; consider using a unique id if available
          id={index} // Passing index as id for deletion purposes
          title={todoItem.title}
          content={todoItem.content}
          onClicked={deleteItem} // Passing delete function to Note component
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
