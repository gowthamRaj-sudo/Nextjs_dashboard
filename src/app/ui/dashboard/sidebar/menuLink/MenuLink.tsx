'use client';

import React from 'react'
import style from "./menuLink.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface menuLinkProps{
    item:any
}
const MenuLink: React.FC<menuLinkProps> = ({ item }) => {
    const pathName = usePathname()
    console.log("pathName",pathName)
    return (
        <Link href={item.path} className={`${style.container} ${pathName===item.path && style.active}`}key={item.title} >{item.icon }{item.title }</Link>
  )
}

export default MenuLink