import React ,{ useState} from 'react';
import {BrowserRouter , Route , Link} from 'react-router-dom';

import './App.css';

import Navbar from './temples/Navbar';
import Input from './temples/Input';
import Post from './temples/Post';



let id = 1;
const Home = () => <div>Home Page</div>
const About = () => <div>About Page</div>

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
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <div style={{ width: "60%" , margin : "50px auto" }}>
        <Route exact path="/">
            <Home />
            <Input addPost={addPost}/>
            {posts.map((post)=>
            <Post key={post.id} id={post.id} title={post.title}  deletPost={deletPost}/>
            )}
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
      </div>
      </BrowserRouter>
  

    </div>
  );
}

export default App;
