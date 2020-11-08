import React ,{ useState} from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
let id = 1;
function App() {
  const [posts , setposts] = useState([]);

  function addPost(title){
    const newPost = {id,title};
    setposts([newPost,...posts]);
    id += 1;
  }

  function deletPost(id){
    const updatePost = posts.filter((post) => post.id != id);
    setposts(updatePost);
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post)=>
       <Post key={post.id} id={post.id} title={post.title}  deletPost={deletPost}/>
       )}

    </div>
  );
}

export default App;
