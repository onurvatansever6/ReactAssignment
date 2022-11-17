import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export function createTechniqueCard (newObj, phases) {
    let cards = [] 

    for (let j = 0; j < newObj[phases].length; j++){
        cards.push(
            <Card
                color="warning"
            >
                <CardBody>
                    <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
                        {newObj[phases][j].names}
                    </CardTitle>
                <br></br>
                    <CardSubtitle style={{fontSize:"12px"}}
                        className="mb-2 text-muted"
                    >
                        {newObj[phases][j].subtechniques.length} SubTechniques
                    </CardSubtitle>
                </CardBody>
            </Card>
        )
    }   

    return cards
}
