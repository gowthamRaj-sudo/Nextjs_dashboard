import React from "react";
import style from "./Pagination.module.css";
const Pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.previous} disabled>
        Prev
      </button>
      <button className={style.next}>Next</button>
    </div>
  );
};

export default Pagination;
