import { TaskProps } from "../../../types/Task";
import styles from "../Card.module.scss"

interface CardBodyProps {
    data: TaskProps
}


const CardBody: React.FC<CardBodyProps> = ({ data }) => {
    return (<div className={styles.cardBody}>
        <p> {data.description} </p>
    </div>);
}

export default CardBody;