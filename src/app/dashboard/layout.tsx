import React, { ReactNode } from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import NavBar from '../ui/dashboard/navBar/NavBar'
import styles from '../ui/dashboard/dashboard.module.css'
interface LayoutProps{
    children:ReactNode
}
const  Layout:React.FC<LayoutProps>  =({children}) => {
  return (
      <div className={styles.container}>
          <div className={styles.menu}>
           <Sidebar/>   
          </div>
          <div className={styles.content}><NavBar />
           {children }</div>
         
      </div>
  )
}

export default Layout