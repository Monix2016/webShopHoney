import { IMaterial } from "../../app/interfaces/i-material";

export const MOCKMATERIAL: IMaterial[] = [{
    id: 0,
    // type:"MH" Material para miel
    type: "MH",
    title: " Iniciación a la Apicultura",
    ubication: "rabat",
    photo: "./assets/img/bee-1299363_1280.png",
    duration: 7.5,
    price: 0,
    valoration: "",
    desc: 20,
},
{
    id: 1,
    // type:"MH" Material para apicultores
    type: "MA",
    title: "Curso Sanidad Apícola (Varroa y otras enfermedades)",
    ubication: "rabat",
    photo: `./assets/img/beekeeping-6206413_1280.png`,
    duration: 0,
    price: 0,
    valoration: "",
    desc: 20,
},
{
    id: 2,
    // type:"MH" Material de cera
    type: "MC",
    title: "Curso Miel, Polen, Propóleos, Jalea Y Cera",
    ubication: "rabat",
    photo: `./assets/img/ai-generated-8558236_1280.jpg`,
    duration: 0,
    price: 0,
    valoration: "",
    desc: 15,
}
]
