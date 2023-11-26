import React from "react";
import style from "./Card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={style.texts}>
        <span className={style.title}>Total Users</span>
        <span className={style.number}>10.253</span>
        <span className={style.detail}>
          <span className={style.positive}>12% </span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
