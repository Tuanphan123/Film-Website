import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  });

  return (
    <div className="home">
      
    </div>
  );
};

export default Home;
