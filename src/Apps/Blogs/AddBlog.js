import { useRef, useState, useEffect } from "react";
import Axios from "axios";
import "./blogs.css"
import { Link, useNavigate } from "react-router-dom"

export default function AddBlog() {
    const userName = useRef();
    const description = useRef();
    const photo = useRef();
    const title = useRef();
    const [valid, setValid] = useState("");
    const [reqvalid, setreqValid] = useState("");
    const [blogs, setBlogs] = useState([]);
    let navigate = useNavigate();
    const insert = () => {
       if (description.current.value!=''&&photo.current.value!=''&&title.current.value!=''){
        Axios.post("http://localhost:3001/insert/blogs", {
            userName: JSON.parse(sessionStorage.getItem('loggedPersInfo')).userName,
            description: description.current.value,
            photo: photo.current.value,
            title: title.current.value,
        }).then((result) => {
            if(result.data.message==="succ"){
               navigate("/blogs")
            }
            else{
                setValid("failed to add")
                setreqValid('')
            }
        });
    }
    else{
        setreqValid('all fields must be filled')
    }

    };
    return (
        <div>
            <div className="aboutBackground" style={{ color: 'white' }}>
                <h1 className="AboutcoverH1">Add Blog</h1>
            </div>
            < div className="Account">
                <div className="cont">
                    
                    <h3 className='contactUsForm'>
                        Add Blog {" "}
                    </h3> <br></br>
                    <br></br>
                    <label className="cominput">Title</label>
                    <input type="text" name="name" className="contactUser inputA" ref={title} required /> <br></br>
                    <label className="cominput">Image</label>
                    <input type="text" name="name" className="contactUser inputA" ref={photo} required /> <br></br>
                    <label className="cominput">Description</label>
                    <textarea type="text" name="message" className='textUser inputA' ref={description} required /> <br></br>
                    <p className="message">{valid && <p>{valid} </p>}<p>{reqvalid}</p></p>
                    <Link exact to="/addBlog"><button onClick={insert} className="btn7">ADD</button></Link>
                </div>

                <div class="AccountForm">
                    {/* <img src={reserve} className="bookPic"></img> */}
                    <div className="contact">
                        <div className="left">
                            <h1>Welcome</h1>
                            <p>Insert nice Blogs and join our community</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}
