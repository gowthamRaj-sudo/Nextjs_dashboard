'use client'
import React from 'react'
import style from './navBar.module.css'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
const NavBar = () => {
  const pathName = usePathname()
  const str="dashboard"
  console.log(str.split("").pop())
  return (
    <div className={style.container}>
<div className={style.title}>{ pathName.split("/").pop()}</div>
      <div className={style.menu}>
        <div className={style.search}>
          <MdSearch />
          <input type='text' placeholder='Search..' className={style.input } />
        </div>
        <div className={style.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20}/>

        </div>
</div>
    </div>
  )
}

export default NavBar