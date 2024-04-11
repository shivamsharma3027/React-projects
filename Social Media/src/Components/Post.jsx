import { FiDelete } from "react-icons/fi";
import { AiTwotoneLike } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../Store/post-list-store";
// import "../App.css"
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  const { addReaction} = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            key={post.id}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <FiDelete />
            <span key={post.id} className="visually-hidden">
              unread messages
            </span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <a onClick={()=>addReaction(post.id)} href="#" className="btn btn-primary">
          <AiTwotoneLike />
        </a>
        <br />
        {post.tags.map((post) => (
          <span
            key={post.id}
            className="badge bg-primary hashtag"
          >{`#${post}`}</span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          {`This post is reacted by `}
          <b dangerouslySetInnerHTML={{ __html: post.reaction }}></b>
          {` people`}
          {/* {`This post is reacted by <b>${post.reaction}</b> peaple`} */}
        </div>
      </div>
    </div>
  );
}

export default Post;
