import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function NewLayer() {
  return (
      <body>
        <div className= "NewLayer">
          <div className= "home-button">
            <Button
              active
              size="lg"
            >
              Create New Layer
            </Button></div> 
        </div>
      </body>
    
  );
}

export default NewLayer;