import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return (
      <body>
        <div className= "Home">
          <h2>Mitre ATT&CK® Navigator</h2>
          <h6>The ATT&CK Navigator is a web-based tool for annotating and exploring ATT&CK matrices. It can be used to visualize defensive coverage, red/blue team planning, the frequency of detected techniques, and more.</h6>
          <div className= "home-button">
            <Button
              active
              size="lg"
              onClick={() => {
                navigate("/newLayer");
              }}
            >
              Create New Layer
            </Button></div> 
        </div>
      </body>
    
  );
}

export default Home;