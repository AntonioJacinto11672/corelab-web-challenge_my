import { useEffect, useState } from "react";
import styles from "./CardColor.module.scss";
import CardColorItems from "../CardColorItems";
const colorValues = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
    "color11",
    "color12"
]
const CardColor = () => {
    const [color, setColor] = useState<string>()

    useEffect(() => {
        
    }, [setColor])
    const count = 1

    const handleCorlor = (color: string) => {
        console.log("Color 1", color)
    }

    return (
        <div className={styles.CardColor}>
            <div className={styles.CardColorContent}>
                <div className={styles.cardColorItens}>
                    <CardColorItems  classColor="color1" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color2" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color3" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color4" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color5" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color6" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color7" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color8" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color9" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color10" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color11" onclick={handleCorlor}/>
                    <CardColorItems  classColor="color12" onclick={handleCorlor}/>
                </div>
            </div>
        </div>
    );
}

export default CardColor;