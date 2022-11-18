const data = require("./enterprise-attack.json");
let jsonData = data.objects

export function createObject(jsonData){
let array = []

for(let i = 0; i < jsonData.length; i++) {
    let name = jsonData[i].name
    if(jsonData[i].external_references){
        let techniqueID = jsonData[i].external_references[0].external_id
        let isSubtechnique = jsonData[i].x_mitre_is_subtechnique
        
        if(jsonData[i].kill_chain_phases) {
            if(isSubtechnique) {
                const maintechniqueID = techniqueID.split(".")[0]; 
                let index = array.findIndex((item) => item.techniqueID === maintechniqueID)
                    
                if (index === -1){  
                    array.push({
                        name: undefined,
                        techniqueID: maintechniqueID,
                        kill_chain_phases: undefined,
                        subtechniques: [{
                            name: name,
                            techniqueID: techniqueID
                        }]
                    })
                } 
                else {
                    array[index].subtechniques = [...array[index].subtechniques, {
                        name: name,
                        techniqueID: techniqueID
                    }]
                }
            } 
            else {
                let index = array.findIndex((item) => item.techniqueID === techniqueID)
                    
                if (index === -1){
                    array.push({
                        name: name,
                        techniqueID: techniqueID,
                        kill_chain_phases: jsonData[i].kill_chain_phases,
                        subtechniques: []
                    })
                } 
                else {
                    array[index].name = name
                    array[index].kill_chain_phases = jsonData[i].kill_chain_phases
                }
            }
        }
    }
}

let resultObj = {}

for (let i = 0; i < array.length; i++) {
    let name = array[i].name
    let techniqueID = array[i].techniqueID
    let kill_chain_phases = array[i].kill_chain_phases
    let subtechniques = array[i].subtechniques
    let obj = {
        names: name,
        techniqueID: techniqueID,
        subtechniques: subtechniques      
    }
    
    for (let j = 0; j < kill_chain_phases.length; j++) {
        if (resultObj[kill_chain_phases[j].phase_name]){
            resultObj[kill_chain_phases[j].phase_name].push(obj)
        } 
        else {
            resultObj[kill_chain_phases[j].phase_name] = [obj]
        }
    }
}
return resultObj
}



