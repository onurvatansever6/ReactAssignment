import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

export function createPhaseCard(newObj, counter){
    let phaseNames = []
    let techniqueCounter = []
    for (let i = 0; i < Object.keys(newObj).length; i++){
        let pairs = ""
        let arrayName = Object.keys(newObj)[i]
        techniqueCounter.push(newObj[arrayName].length)
        let slicedPhaseName = Object.keys(newObj)[i].split("-");
        for (let j = 0; j < slicedPhaseName.length; j++){
            pairs += slicedPhaseName[j]+" "
        }
        let capitalPairs = pairs.toUpperCase()
        phaseNames.push({name: capitalPairs })
    }
    return <Card
                color="light"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        {phaseNames[counter].name}    
                    </CardTitle>
                <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {techniqueCounter[counter]} Techniques
                    </CardSubtitle>
                </CardBody>
            </Card>
}
