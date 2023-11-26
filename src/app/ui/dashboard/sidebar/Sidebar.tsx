import React from "react";
import style from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdLogout,
  MdHelpCenter,
} from "react-icons/md";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";
const menuItems = [
  {
    title: "Page",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "User",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <Image
          className={style.userImage}
          src="/832.jpg"
          alt="user"
          width="50"
          height="50"
        />
        <div className={style.userDetails}>
          <span className={style.username}> Gowtham</span>
          <span className={style.userTitle}> Admin</span>
        </div>
      </div>
      <ul className={style.list}>
        {" "}
        {menuItems.map((categories) => (
          <li key={categories.title}>
            <span className={style.cat}>
              {categories.title}
              {categories.list.map((item) => (
                <MenuLink item={item} />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <button className={style.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
