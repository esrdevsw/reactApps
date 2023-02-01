import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Posts from "./Posts";
import './style-fb.css';


const App = () => {
  return (

    <div className="container">
      <div className="left-navigation-bar">
        Left Navigation Bar
        <Navbar />
      </div>
      <div className="center-area">
        <Banner />
        <div className="posts-area">
          <div className="post">
          </div>
          <div className="post-body">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
