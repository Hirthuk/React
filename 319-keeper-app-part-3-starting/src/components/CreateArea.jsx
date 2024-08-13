import React from "react";

function CreateArea(props) {
  // State to manage title and content of the note being created
  const [inital, final] = React.useState({
    title: "",
    content: ""
  });

  // Function to update title and content as user types
  function UpdateChange(event) {
    const { name, value } = event.target;

    final((preValue) => {
      return {
        ...preValue,
        [name]: value // Updating the specific field (title or content)
      };
    });
  }

  // Function to handle submission of the note
  function handleClick(event) {
    event.preventDefault();

    // Passing the current note object to the addItem function in App component
    props.setFunction(inital);

    // Resetting the form inputs after submission
    final({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        {/* Input field for title */}
        <input
          onChange={UpdateChange}
          name="title"
          placeholder="Title"
          value={inital.title}
        />
        {/* Textarea for note content */}
        <textarea
          onChange={UpdateChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inital.content}
        />
        {/* Button to submit the note */}
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
