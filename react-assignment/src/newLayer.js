import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { createObject } from "./main.js"
import { createPhaseCard } from "./createPhaseCard.js"

const data = require("./enterprise-attack.json");
const jsonData = data.objects
const newObj = createObject(jsonData)

function NewLayer() {
    return (
      <body>
        <div className= "NewLayer">
            <div className="PhaseNameCards">
            {createPhaseCard(newObj, 0)}
            {createPhaseCard(newObj, 1)}
            {createPhaseCard(newObj, 2)}
            {createPhaseCard(newObj, 3)}
            {createPhaseCard(newObj, 4)}
            {createPhaseCard(newObj, 5)}
            {createPhaseCard(newObj, 6)}
            {createPhaseCard(newObj, 7)}
            {createPhaseCard(newObj, 8)}
            {createPhaseCard(newObj, 9)}
            {createPhaseCard(newObj, 10)}
            {createPhaseCard(newObj, 11)}
            {createPhaseCard(newObj, 12)}
            {createPhaseCard(newObj, 13)}
            </div>
        </div>
        <div className="OuterTechniqueCardContainer">
            <div className="InnerTechniqueCardContainer1">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer2">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer3">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer4">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer5">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer6">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer7">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer8">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer9">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer10">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer11">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer12">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer13">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
            <div className="InnerTechniqueCardContainer14">
                <div className="InnerTechniqueCardRow">
                <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        adam ol lan   
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        10 SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
                </div>
            </div>
        </div>
      </body>
    );
}

export default NewLayer;