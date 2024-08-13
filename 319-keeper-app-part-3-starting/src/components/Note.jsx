import React from "react";

function Note(props) {
  // Function to handle deletion of the note
  function buttonClicked() {
    props.onClicked(props.id); // Calling deleteItem function in App component
    console.log(props.id); // Logging the id of the note being deleted
  }

  return (
    <div className="note">
      {/* Displaying title and content of the note */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* Button to delete the note */}
      <button onClick={buttonClicked}>DELETE</button>
    </div>
  );
}

export default Note;
