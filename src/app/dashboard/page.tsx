import React from "react";
import Card from "../ui/dashboard/card/Card";
import style from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/dashboard/rightBar/RightBar";
import Chart from "../ui/dashboard/chart/Chart";
import Transactions from "../ui/dashboard/transactions/Transactions";

const Dashboard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      {/* <div className={style.side}>
        <RightBar />
      </div> */}
    </div>
  );
};

export default Dashboard;
