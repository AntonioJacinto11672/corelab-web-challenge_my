import React, { ReactNode, useCallback, useState } from "react";
import styles from "./Card.module.scss";
import CardColor from "./CardColor";
import { TaskProps } from "../../types/Task";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

export interface CardProps {
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  //Criar botão menu abrir  fechar

  return (<div className={styles.Card}>
    {children}
  </div>

  );
};

export default Card;
