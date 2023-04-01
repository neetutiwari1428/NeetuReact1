import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NewBlog from "./Components/NewBlog";
import Show from "./Components/Show";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Blog4 from "./Components/Blog4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard />} />
          <Route path="newBlog" element={<NewBlog />} />
          <Route path="show" element={<Show/>}/>
          <Route path="Blog1" element={<Blog1/>}/>
          <Route path="Blog2" element={<Blog2/>}/>
          <Route path="Blog3" element={<Blog3/>}/>
          <Route path="Blog4" element={<Blog4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);