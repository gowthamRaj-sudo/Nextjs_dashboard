import React from "react";
import style from "@/app/ui/dashboard/users/singleUser/SingleUser.module.css";
import Image from "next/image";
const SingleUserPage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.imgContainer}>
          <Image src="/832.jpg" alt="user" fill />
        </div>
        Gowtham
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <label>UserName</label>
          <input type="text" name="userName" placeholder="Gowtham" />
          <label>Email</label>
          <input type="text" name="email" placeholder="gowtham@gmail.com" />
          <label>Password</label>
          <input type="text" name="password" placeholder="Gowtham" />

          <label>Phone</label>
          <input type="text" name="Phone" placeholder="+917904244346" />
          <label>Address</label>
          <textarea name="userName" placeholder="Kovalam"></textarea>
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
