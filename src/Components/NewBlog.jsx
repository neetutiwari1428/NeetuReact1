// import React, { useState,useEffect }  from "react";
// // import axios from "axios";

// function NewBlog() {
//   const [name, setName] = useState("");
//   const [description, setDescriptionription] = useState("");
//   const [createdby, setCreatedby] = useState("");
//   const [blogs, setBlogs] = useState([]);
//   const [index, setIndex] = useState(-1);
  


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}`,`Description: ${description}`,`Createdby: ${createdby}`);
//     localStorage.setItem("Name",name)
//     localStorage.setItem("Description",description)
//     localStorage.setItem("Createdby",createdby)

//     const newBlog ={name,description,createdby};
//     const newBlogs = [...blogs];
//     if (index === -1) {
//       newBlogs.push(newBlog);
//     } else {
//       newBlogs[index] = newBlog;
//       setIndex(-1);
//     }
//     setBlogs(newBlogs);    
    
//     const data={name,description,createdby}
//       setBlogs([...blogs, data]);
//       localStorage.setItem("Blogs", JSON.stringify([...blogs, data]));
//       setName("")
//       setDescription("")
//       setCreatedby("")
//   };

//   console.log(localStorage.getItem("Name"),("Description"),("Createdby"));

//   useEffect(() => {
//     const storeBlog = JSON.parse(localStorage.getItem("Blogs"));
//     if (storeBlog) {
//       setBlogs(storeBlog);
//     }
//   }, []);
  
  
//   const handleEditBlog = (index) => {
//     const blog = blogs[index];
//     setName(blog.name);
//     setDescription(blog.description);
//     setCreatedby(blog.createdby);
//     setIndex(index);
//   };

//   const handleRemoveBlog =(index) => {
//     if (blogs.length !== 1) {
//       const values = [...blogs]
//       values.splice(index, 1)
//       setBlogs(values)
//     }
//   }
  
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </label>
//         <br/>
//         <label>
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           createdby
//           <input
//             type="text"
//             value={createdby}
//             onChange={(event) => setCreatedby(event.target.value)}
//           />
//         </label>
        
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       {blogs.map((blog, index) => (
//         <div key={index}>
//           <h1>BLOG:</h1>
//           <p>{blog.name}</p>
//           <p>{blog.desc}</p>
//           <p>{blog.create}</p>
//           <button onClick={() => handleEditBlog(index)}>Edit</button>
//           <button onClick={() => handleRemoveBlog(index)}>Remove</button>
//         </div>
//       ))}
//     </div>
    
//   );
// }
// export default NewBlog;


import React, { useState } from "react";


function NewBlog() {
  React.useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [create, setCreate] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(-1);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`,`Description: ${description}`,`Create: ${create}`);

    const newBlog = {name,description, create,};
    const newBlogs = [...blogs];
    if (index === -1) {
      newBlogs.push(newBlog);
    } else {
      newBlogs[index] = newBlog;
      setIndex(-1);
    }
    setBlogs(newBlogs);

    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setName("");
    setDescription("");
    setCreate("");
    // localStorage.setItem('Name',name)
    // localStorage.setItem('Desc',desc)
    // localStorage.setItem('Create',create)
  };
  const handleEditBlog = (index) => {
    const blog = blogs[index];
    setName(blog.name);
    setDescription(blog.description);
    setCreate(blog.create);
    setIndex(index);
  };
  const handleRemoveBlog = (index) => {
    const newBlogs = [...blogs];
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };
  return (
    <div className="conteiner">
      <div>
        <h1>Create New Blog</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Your Name"
          />
        </label>
        <br />
        <label>
         Description:
        <textarea
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter description"
           />
        </label>
        <br />
        <label>
          Create by:
          <input
            type="text"
            value={create}
            onChange={(event) => setCreate(event.target.value)}
            placeholder="Enter Name"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h1>Blog Data:</h1>
          <p>{blog.name}</p>
          <p>{blog.description}</p>
          <p>{blog.create}</p>
          <button onClick={() => handleEditBlog(index)}>Edit</button>
          <button onClick={() => handleRemoveBlog(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default NewBlog;