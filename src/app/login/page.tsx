import React from "react";
import style from "@/app/ui/login/login.module.css";
const LoginPage = () => {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <h1 className={style.title}>Login</h1>
        <input type="text" placeholder="userName" />
        <input type="text" placeholder="userName" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
