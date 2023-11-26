import React from "react";
import style from "./Transactions.module.css";
import Image from "next/image";
const Transactions = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Latest Transactions</h2>
      <table className={style.table}>
        <thead className="">
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.user}>
                {" "}
                <Image
                  src="/832.jpg"
                  width={40}
                  height={40}
                  alt="image"
                  className={style.userImage}
                />
                Gowtham
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.pending}`}>
                Pending
              </span>
            </td>
            <td>28-09-1997</td>
            <td>₹ 88</td>
          </tr>
          <tr>
            <td>
              <div className={style.user}>
                {" "}
                <Image
                  src="/832.jpg"
                  width={40}
                  height={40}
                  alt="image"
                  className={style.userImage}
                />
                Gowtham
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.done}`}>Done</span>
            </td>
            <td>28-09-1997</td>
            <td>₹ 88</td>
          </tr>
          <tr>
            <td>
              <div className={style.user}>
                {" "}
                <Image
                  src="/832.jpg"
                  width={40}
                  height={40}
                  alt="image"
                  className={style.userImage}
                />
                Gowtham
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>28-09-1997</td>
            <td>₹ 88</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
