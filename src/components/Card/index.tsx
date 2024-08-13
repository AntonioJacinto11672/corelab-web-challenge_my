import React, { ReactNode, useCallback, useState } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
  children: ReactNode,
  color: string
}

const Card: React.FC<CardProps> = ({ children, color }) => {
    console.log("Não tem cor")
  return (<div className={styles.Card} style={{background: color}}>
    {children}
  </div>

  );
};

export default Card;
