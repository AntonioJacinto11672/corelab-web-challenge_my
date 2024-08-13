import styles from "../Card.module.scss"

interface CardFooterProps {
    onClick: () => void
    handleDelete: () => void
}

const CardFooter: React.FC<CardFooterProps> = ({ onClick, handleDelete }) => {
    return (<div className={styles.cardFooter}>
        <div>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9443 9.16667L14.8321 10.0544L6.25656 18.6111H5.38767V17.7422L13.9443 9.16667ZM17.3443 3.5C17.1082 3.5 16.8627 3.59444 16.6832 3.77389L14.9549 5.50222L18.4966 9.04389L20.2249 7.31556C20.5932 6.94722 20.5932 6.33333 20.2249 5.98389L18.0149 3.77389C17.826 3.585 17.5899 3.5 17.3443 3.5ZM13.9443 6.51278L3.49878 16.9583V20.5H7.04045L17.486 10.0544L13.9443 6.51278Z" fill="#51646E" />
                </svg>
            </span>
            <span onClick={onClick} className={styles.paintBucket}>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4957 11.5469C16.4957 11.5469 14.4957 13.7169 14.4957 15.0469C14.4957 15.5773 14.7064 16.086 15.0815 16.4611C15.4565 16.8362 15.9652 17.0469 16.4957 17.0469C17.0261 17.0469 17.5348 16.8362 17.9099 16.4611C18.285 16.086 18.4957 15.5773 18.4957 15.0469C18.4957 13.7169 16.4957 11.5469 16.4957 11.5469ZM2.70566 10.0469L7.49566 5.25691L12.2857 10.0469M14.0557 8.98691L5.11566 0.0469055L3.70566 1.45691L6.08566 3.83691L0.935664 8.98691C0.345664 9.54691 0.345664 10.5169 0.935664 11.1069L6.43566 16.6069C6.72566 16.8969 7.11566 17.0469 7.49566 17.0469C7.87566 17.0469 8.26566 16.8969 8.55566 16.6069L14.0557 11.1069C14.6457 10.5169 14.6457 9.54691 14.0557 8.98691Z" fill="#51646E" />
                    <path d="M7.56438 15.0439L2.73438 10.0001H12.3018L7.56438 15.0439Z" fill="#FFA000" />
                </svg>

            </span>

        </div>


        <img src="/img/remove.svg" alt="Remover" className={styles.remove}  onClick={handleDelete}/>

    </div>);
}

export default CardFooter;