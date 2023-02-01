import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Posts from "./Posts";
import './style-fb.css';


const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Posts />
    </div>
  );
};

export default App;
