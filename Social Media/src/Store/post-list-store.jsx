import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addReaction: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
    
  } else if (action.type === "ADD_REACTION") {
    const postId = action.payload.postId;
    // Find the post by postId
    const postIndex = newPostList.findIndex((post) => post.id === postId);
    // console.log(postIndex);
    if (postIndex !== -1) {
      // Increment the reaction count
      newPostList[postIndex].reaction++;

      console.log(newPostList[postIndex].reaction);
    }
    
    }
    else if(action.type === "ADD_POST"){
   newPostList=[action.payload,...currPostList]
 
    }
       
    
    
    
  
  return newPostList;
};
const PostListProvider = ({ children }) =>
{
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId,postTitle,postBody,reactions,tag) => {
      dispatchPostList({
        type:'ADD_POST',
        payload:{
          id:postList.length+1,
          title: postTitle,
          body: postBody,
          reaction: reactions,
          userId: userId,
          tags:tag,
        }

      })




    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}  `);
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addReaction = (postId) => {
    dispatchPostList({
      type: "ADD_REACTION",
      payload: {
        postId,
        
       
      },
    });
  };


return (
  <PostList.Provider
    value={{
      postList,
      addPost,
      deletePost,
      addReaction,
    }}
  >
    {children}
  </PostList.Provider>
);
   
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Delhi",
    body: "Hi friends, I am going to Delhi for my      vacations. Hope to enjoy a lot .Peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vactions", "Delhi", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hi friends, I am going to Mumbai for my      vacations. Hope to enjoy a lot .Peace out.",
    reaction: 5,
    userId: "user-10",
    tags: ["vactions", "Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
