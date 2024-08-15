import styles from "../CardColor/CardColor.module.scss";
interface CardColorItemsProps {
    color: string
    onclick: (color: string) => void
}

const CardColorItems: React.FC<CardColorItemsProps> = ({ color, onclick }) => {
    return (<div className={styles[color]}  style={{background: color}} onClick={() => onclick(color)}> </div>);
}

export default CardColorItems;