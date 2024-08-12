import styles from "./Card.module.scss";

const CardBody = () => {
    return (<div className={styles.cardBody}>
        <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
    </div>);
}

export default CardBody;