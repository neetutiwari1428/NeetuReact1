import React, { useState } from "react";
function NewBlog() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdby, setCreatedby] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Createdby: ${createdby}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        createdby
        <input
          type="text"
          value={createdby}
          onChange={(event) => setCreatedby(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default NewBlog;