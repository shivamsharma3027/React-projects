import { useContext,useRef } from "react";
import PostListProvider, { PostList } from "../Store/post-list-store";


function CreatePost() {
 const {addPost}= useContext(PostList);




const userId=useRef();
const postTitle=useRef();
const postBody=useRef();
const reactions=useRef();
const tags=useRef();

const handleSubmit=(event)=>{
  event.preventDefault();
  const id=userId.current.value;
  const title=postTitle.current.value;
  const body=postBody.current.value;
  const reaction=reactions.current.value;
  const tag=tags.current.value.split(" ");

  userId.current.value="";
  postTitle.current.value="";
  postBody.current.value="";
  reactions.current.value="";
  tags.current.value="";
  addPost(id,title,body,reaction,tag);
  
}

  return (
    <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User ID</label>
    <input type="text" ref={userId} className="form-control" id="userId" placeholder="Your User Id"/>
   
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitle} className="form-control" id="title" placeholder="How are you feeling today..."/>
   
  </div>


  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBody} 
    rows="4" className="form-control" id="body" placeholder="Tell us more about it"/>
   
  </div>
  
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input type="text" ref={reactions} className="form-control" id="title" placeholder="How many peaple reacted to this post "/>
   
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" ref={tags} className="form-control" id="tags" placeholder="Please enter tags using space  "/>
   
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost
