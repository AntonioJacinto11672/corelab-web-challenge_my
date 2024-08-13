import { TaskProps } from "../../../types/Task";
import styles from "../Card.module.scss"


interface CardHeaderProps {
    data: TaskProps,
    handleIsFavorite: () => void
}
const CardHeader: React.FC<CardHeaderProps> = ({ data, handleIsFavorite }) => {
    return (<div>
        <div className={styles.cardHeader}>
            <h1> {data.title} </h1>
            {data.isFavorite ?
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleIsFavorite}>
                    <path d="M7.47998 7.50375L2.32617 8.29666L6.88529 11.9638L5.69595 17.5141L9.85865 14.3425L15.0125 17.5141L13.6249 11.9638L17.4903 8.29666L12.2373 7.50375L9.85865 2.34995L7.47998 7.50375Z" fill="#FFA000" />
                    <path d="M9.93799 13.7112L6.29971 15.9077L7.25766 11.7662L4.04514 8.97947L8.28335 8.62145L9.93799 4.71223L11.5926 8.62145L15.8308 8.97947L12.6183 11.7662L13.5763 15.9077M19.6143 7.76026L12.657 7.17001L9.93799 0.754639L7.21896 7.17001L0.261719 7.76026L5.53529 12.3371L3.95805 19.1396L9.93799 15.5303L15.9179 19.1396L14.331 12.3371L19.6143 7.76026Z" fill="#455A64" />
                </svg> : <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleIsFavorite}>
                    <path d="M9.93799 13.2503L6.29971 15.4469L7.25766 11.3054L4.04514 8.51865L8.28335 8.16063L9.93799 4.25142L11.5926 8.16063L15.8308 8.51865L12.6183 11.3054L13.5763 15.4469M19.6143 7.29944L12.657 6.70919L9.93799 0.293823L7.21896 6.70919L0.261719 7.29944L5.53529 11.8763L3.95805 18.6787L9.93799 15.0695L15.9179 18.6787L14.331 11.8763L19.6143 7.29944Z" fill="#455A64" />
                </svg>
            }



        </div>
    </div>

    );
}

export default CardHeader;