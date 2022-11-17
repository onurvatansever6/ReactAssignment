import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import { createObject } from "./main.js"
const data = require("./enterprise-attack.json");

let createSubContainer = () => {
    let data = createObject()
    console.log(data.impact[0])

    return <div className='subtechnique-child'>
        {data[0].name}
    </div>
    
}

let deneme = createSubContainer()

function NewLayer() {
    return (
      <body>
        <div className= "NewLayer">
            <div className="PhaseNameCards">
            <Card
                color="light"
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/16fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            <Card
                color="light"
                style={{
                 width: '1/14fr'
                }}
>
            <CardBody>
                <CardTitle tag="h5">
                    Command and Control
                </CardTitle>
                <br></br>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    16 techniques
                </CardSubtitle>
                </CardBody>
            </Card>
            </div>
        </div>
        <div className="TechniquesGrid">
        {createSubContainer()}
        </div>
      </body>
    );
}

export default NewLayer;