import { IMaterial } from "../../app/interfaces/i-material";

export const MOCKMATERIAL: IMaterial[] = [{
    id: 0,
    // type:"MH" Material para miel
    type: "MH",
    name: " Iniciación a la Apicultura",
    ubication: "rabat",
    photo: "./assets/img/bee-1299363_1280.png",
    duration: 7.5,
    price: 0,
    valoration: "",
    desc: 20,
    weight:1,
},
{
    id: 1,
    // type:"MA" Material para apicultores
    type: "MA",
    name: "Curso Sanidad Apícola (Varroa y otras enfermedades)",
    ubication: "rabat",
    photo: `./assets/img/beekeeping-6206413_1280.png`,
    duration: 0,
    price: 0,
    valoration: "",
    desc: 20,
    weight:1,
},
{
    id: 2,
    // type:"MC" Material de cera
    type: "MC",
    name: "Curso Miel, Polen, Propóleos, Jalea Y Cera",
    ubication: "rabat",
    photo: `./assets/img/ai-generated-8558236_1280.jpg`,
    duration: 0,
    price: 0,
    valoration: "",
    desc: 15,
    weight:1,
}
]
