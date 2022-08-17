import "./InfoBox.css";
import apple from "../../../assets/img/infoBox/apple.png";
import energy from "../../../assets/img/infoBox/energy.png";
import cheeseburger from "../../../assets/img/infoBox/cheeseburger.png";
import chicken from "../../../assets/img/infoBox/chicken.png";
import { Box } from "./box/Box";
interface KeyData {
    calorieCount: number
    carbohydrateCount: number
    lipidCount: number
    proteinCount: number
}
export function InfoBox({ keyData }: { keyData: KeyData }) {
    return (
        <section className="ctnInfoBox">
            {Object.keys({ ...keyData }).map((key:any, index:number) => {
                const keysList = {...keyData} as any
                const boxProps = formatContent(key, keysList[key])
                return (
                    <Box key={index} name={boxProps.name} icon={boxProps.icon} style={boxProps.style} value={boxProps.value }></Box>
                )
            })}
        </section>
    )
}



function formatContent(key: "calorieCount" | "carbohydrateCount" | "lipidCount" | "proteinCount", value: string) {
    switch (key) {
        case "calorieCount":
            return {icon:{ src: energy, alt: "Compteur de calories" }, name: "Calories", value: value +"kCal", style:{backgroundColor: "#FF00001A"}}
        case "proteinCount":
            return {icon:{ src: chicken, alt: "Compteur de protéines" }, name: "Proteines", value: value + "g", style:{backgroundColor: "#4AB8FF1A"}}
        case "carbohydrateCount":
            return {icon:{ src: apple, alt: "Compteur de glucides" }, name: "Glucides", value: value + "g", style:{backgroundColor: "#F9CE231A"}}
        case "lipidCount":
            return {icon:{ src: cheeseburger, alt: "Compteur de lipides" }, name: "Lipides", value: value + "g", style:{backgroundColor: "#FD51811A"}}
    }
}
