import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export function createTechniqueCard (newObj, phases) {
    let techniqueNames = []
    let subtechniqueCounts = []
    let cards = [] 

    for (let j = 0; j < newObj[phases].length; j++){
        techniqueNames.push(newObj[phases][j].names)
        subtechniqueCounts.push((newObj[phases][j].subtechniques).length)
        cards.push(
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        {techniqueNames[j]}
                    </CardTitle>
                <br></br>
                    <CardSubtitle style={{fontSize:"12px"}}
                        className="mb-2 text-muted"
                    >
                        {subtechniqueCounts[j]} SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
        )
    }   

    return cards
}
