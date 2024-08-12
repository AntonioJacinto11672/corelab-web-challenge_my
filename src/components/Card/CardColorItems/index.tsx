import styles from "../CardColor/CardColor.module.scss";
interface CardColorItemsProps {
    classColor: string
    onclick: (classColor: string) => void
}

const CardColorItems: React.FC<CardColorItemsProps> = ({ classColor, onclick }) => {
    return (<div className={styles[classColor]} onClick={() => onclick(classColor)}> </div>);
}

export default CardColorItems;