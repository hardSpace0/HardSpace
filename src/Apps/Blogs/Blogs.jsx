import { useRef, useState } from "react";
import Axios from "axios";
import "./blogs.css"
import {Link } from "react-router-dom"

function Blogs() {
  const userName = useRef();
  const description = useRef();
  const photo = useRef();
  const title = useRef();
  const [valid, setValid] = useState("");
  const [blogs, setBlogs] = useState([]);

  const insert = () => {
    Axios.post("http://localhost:3001/insert/blogs", {
      userName: userName.current.value,
      description: description.current.value,
      photo: photo.current.value,
      title: title.current.value,
    }).then((result) => {
      console.log(result);

      console.log("succes");
    });

    Axios.get("http://localhost:3001/api/get/blogs").then((response) => {
      if (response.data.message === "succ") {
        setBlogs(response.data.result);
      }
    });
  };

  Axios.get("http://localhost:3001/api/get/blogs").then((response) => {
    if (response.data.message === "succ") {
      setBlogs(response.data.result);
    }
  });

  return (
    <div className="blogs">
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Blogs</h1>
      </div>
      {sessionStorage.getItem("logged26554336")==="logged"&&
      <Link to ="/addBlog"><button className="btn7 addblog">Add Blog</button></Link>}
      <div className="displayblogs">
        {blogs.map((val) => {
          <div key={val.blogID}></div>;
          return (
            <div className="container">
              <div className="blog-details">
                <h1>{val.title}</h1>
                <p className="information">{val.description}</p>
                <div className="control">
                  author: <span className="authoring">{val.userName}  </span>
                </div>
              </div>
              <div className="blog-image">
                <img src={val.photo} alt=""></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



export default Blogs;
