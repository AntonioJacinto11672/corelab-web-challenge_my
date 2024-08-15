import { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./CardColor.module.scss";
import CardColorItems from "../CardColorItems";
interface CardColorProps {
    children: ReactNode
}
const CardColor: React.FC<CardColorProps> = ({ children }) => {
    return (
        <div className={styles.CardColor}>
            <div className={styles.CardColorContent}>
                <div className={styles.cardColorItens}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardColor;