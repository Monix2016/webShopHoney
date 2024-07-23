import { IMaterial } from "../../app/interfaces/i-material";

export const MOCKMATERIAL: IMaterial[] = [{
    id: 0,
    // type:"MH" Material para miel
    type: "MT",
    name: "Material",
    ubication: "rabat",
    photo: "./assets/img/bee-1299363_1280.png",
    duration: 7.5,
    price: 56,
    valoration: "",
    desc: 20,
    weight:1,
},
{
    id: 1,
    // type:"MA" Material para apicultores
    type: "MT",
    name: "Material2",
    ubication: "rabat",
    photo: `./assets/img/beekeeping-6206413_1280.png`,
    duration: 0,
    price: 21,
    valoration: "",
    desc: 20,
    weight:1,
},
{
    id: 2,
    // type:"MC" Material de cera
    type: "MT",
    name: "Material3",
    ubication: "rabat",
    photo: `./assets/img/ai-generated-8558236_1280.jpg`,
    duration: 0,
    price: 12,
    valoration: "",
    desc: 15,
    weight:1,
}
]
