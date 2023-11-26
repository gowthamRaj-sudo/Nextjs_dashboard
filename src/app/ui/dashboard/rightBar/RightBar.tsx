import React from "react";
import style from "./rightBar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const RightBar = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.bgContainer}>
          <Image src="/2130.png" alt="astronaut" fill className={style.bg} />
        </div>
        <div className={style.texts}>
          <span className={style.notification}>🔥 available Now</span>
          <h3 className={style.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nobis fuga, voluptates provident ad et. Sint veritatis suscipit
            facilis soluta!
          </h3>
          <span className={style.subtitle}>Takes 4 minutes to learn</span>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ratione nulla reprehenderit unde qui. Cumque, amet, ipsam dolorem
            dolore mollitia perferendis, doloribus impedit sunt provident
            voluptatum minima beatae suscipit assumenda.
          </p>
          <button className={style.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
      {/* <div className={style.texts}>
        <span className={style.notification}>🔥 available Now</span>
        <h3 className={style.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          nobis fuga, voluptates provident ad et. Sint veritatis suscipit
          facilis soluta!
        </h3>
        <span className={style.subtitle}>Takes 4 minutes to learn</span>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          ratione nulla reprehenderit unde qui. Cumque, amet, ipsam dolorem
          dolore mollitia perferendis, doloribus impedit sunt provident
          voluptatum minima beatae suscipit assumenda.
        </p>
        <button className={style.button}>
          <MdReadMore /> Learn
        </button>
      </div> */}
    </div>
  );
};

export default RightBar;
