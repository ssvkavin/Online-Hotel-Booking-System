import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home() {
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/areas").then((res) => {
      console.log("areas received:",res.data);
      setAreas(res.data)
      
    })
    .catch((err)=>console.error("error fetching areas:",err));
    
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-heading">Available Areas</h2>
      <ul className="home-list">
      {areas.map((area, index) => (
        <li key={index} className="home-list-item" onClick={() => navigate(`/rooms/${area}`)}>
          {area}
        </li>
      ))}
      </ul>
    </div>
  );
}


export default Home;
