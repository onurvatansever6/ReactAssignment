import { createObject } from "./main.js"

const data = require("./enterprise-attack.json")
const jsonData = data.objects
const newObj = createObject(jsonData)

function createTechniqueCard (newObj) {
    for (let i = 0; i < Object.keys(newObj).length; i++){       //newObj[arrayName] objedeki subtechniquelere ulaşmak için kullanılacak
        let arrayName = Object.keys(newObj)[i]
        console.log(arrayName)
    }
}

createTechniqueCard(newObj)