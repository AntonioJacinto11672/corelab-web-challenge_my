import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import CardColor from "./CardColor";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = () => {
  return (<div>


    <div className={styles.Card}>

      <div>
        <div className={styles.cardHeader}>
          <h1>Título</h1>
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5464 13.2621L6.90811 15.4586L7.86606 11.3171L4.65354 8.53037L8.89174 8.17235L10.5464 4.26314L12.201 8.17235L16.4392 8.53037L13.2267 11.3171L14.1847 15.4586M20.2227 7.31116L13.2654 6.72091L10.5464 0.305542L7.82735 6.72091L0.870117 7.31116L6.14368 11.888L4.56645 18.6905L10.5464 15.0812L16.5263 18.6905L14.9394 11.888L20.2227 7.31116Z" fill="#455A64" />
          </svg>


        </div>
      </div>

      <hr />

      <div className={styles.cardBody}>
        <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
      </div>

      <div className={styles.cardFooter}>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9443 9.16667L14.8321 10.0544L6.25656 18.6111H5.38767V17.7422L13.9443 9.16667ZM17.3443 3.5C17.1082 3.5 16.8627 3.59444 16.6832 3.77389L14.9549 5.50222L18.4966 9.04389L20.2249 7.31556C20.5932 6.94722 20.5932 6.33333 20.2249 5.98389L18.0149 3.77389C17.826 3.585 17.5899 3.5 17.3443 3.5ZM13.9443 6.51278L3.49878 16.9583V20.5H7.04045L17.486 10.0544L13.9443 6.51278Z" fill="#51646E" />
          </svg>
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4957 11.5468C16.4957 11.5468 14.4957 13.7168 14.4957 15.0468C14.4957 15.5772 14.7064 16.086 15.0815 16.461C15.4565 16.8361 15.9652 17.0468 16.4957 17.0468C17.0261 17.0468 17.5348 16.8361 17.9099 16.461C18.285 16.086 18.4957 15.5772 18.4957 15.0468C18.4957 13.7168 16.4957 11.5468 16.4957 11.5468ZM2.70566 10.0468L7.49566 5.25681L12.2857 10.0468M14.0557 8.98681L5.11566 0.046814L3.70566 1.45681L6.08566 3.83681L0.935664 8.98681C0.345664 9.54681 0.345664 10.5168 0.935664 11.1068L6.43566 16.6068C6.72566 16.8968 7.11566 17.0468 7.49566 17.0468C7.87566 17.0468 8.26566 16.8968 8.55566 16.6068L14.0557 11.1068C14.6457 10.5168 14.6457 9.54681 14.0557 8.98681Z" fill="#51646E" />
          </svg>

        </div>


        <img src="/img/remove.svg" alt="Remover" className={styles.remove} />

      </div>
    </div>

    <CardColor />
  </div>
  );
};

export default Card;
