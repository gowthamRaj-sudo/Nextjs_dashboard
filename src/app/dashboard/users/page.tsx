import React from "react";
import style from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";

interface userPageProps {
  searchParams: any;
}
const UserPage: React.FC<userPageProps> = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const users = await fetchUsers(q);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a user..." />
        <Link href={"/dashboard/users/add"}>
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={style.user}>
                  <Image
                    src={user.img || "/832.jpg"}
                    alt="user"
                    width={40}
                    height={40}
                    className={style.userImage}
                  />
                  {user.userName}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={style.buttons}>
                  {" "}
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${style.button} ${style.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
