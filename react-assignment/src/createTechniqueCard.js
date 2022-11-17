import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export function createTechniqueCard (newObj) {
    let techniqueNames = []
    let subtechniqueCounts = []
    for (let i = 0; i < Object.keys(newObj).length; i++){       //newObj[arrayName] objedeki subtechniquelere ulaşmak için kullanılacak
        let arrayName = Object.keys(newObj)[i]
        for (let j = 0; j < newObj[arrayName].length; j++){
            techniqueNames.push(newObj[arrayName][j].names)
            subtechniqueCounts.push(newObj[arrayName][j].subtechniques.length)
        }
        
    }

    return <Card
    color="warning"
>
    <CardBody>
        <CardTitle style={{fontSize:"13px", fontWeight: 'bold'}}>
               {techniqueNames[0]}
        </CardTitle>
    <br></br>
        <CardSubtitle style={{fontSize:"12px"}}
            className="mb-2 text-muted"
        >
            {subtechniqueCounts[0]} SubTechniques
        </CardSubtitle>
    </CardBody>
</Card>
}
