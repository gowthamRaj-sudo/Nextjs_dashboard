import React from "react";
import style from "@/app/ui/dashboard/users/addUser/addUsers.module.css";
const AddUserPage = () => {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <input type="text" placeholder="userName" name="userName" required />
        <input type="email" placeholder="email" name="useremailName" required />

        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />

        <input type="phone" placeholder="phone" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="desc"
          rows={12}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
