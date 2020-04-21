import React, { useState, useEffect } from "react";
import {Container, Image} from "";
import { TextArea , Input, Form} from "semantic-ui-react";
import APi from "../utils/APi";

// Look at this stuff particularly !! //
function Form(){
const [postedPost, setPostedPost] = useState([])
const [post, setPost] = useState({
  username:"",
  description: ""
});

useEffect(() => {
  loadPosts()
}, [])

function loadPosts() {
  APi.getPosts()
  .then(res =>
   setPost(res.data)
    ).catch(err => console.log(err))
};

function handleInputChange(event) {
  const { name, value } = event.target;
  console.log(name); //Shows the field <---
  console.log(post[name]); //points to one of the variables for 
  setPost({ ...post, [name]: value})
}
// Have Rani or someone take a look at this
// might have an syntax oopsie somewhere
function handleFormSubmit(event){
  event.preventDefault();
  if (post.username && post.description) {
  APi.savePost({
    username: post.username,
    description: post.description
  }).then(() => {
    setPost({
      username:"",
      description:""
    })
  }).then(() =>{loadPosts();})
}
}
  return (
    <div>
      <form>
              <Input
                onChange={handleInputChange}
                name="username"
                placeholder="Name of poster"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="description"
              />
              
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Post thine angst!
              </FormBtn>
            </form>

    </div>
  )
}

export default Form;
