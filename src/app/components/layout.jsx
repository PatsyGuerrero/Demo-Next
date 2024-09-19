"use client"
import React,{ useEffect,useState } from "react"
import * as styles from "./layout.module.scss"

const Layout = ({children}) => {
  const [responsive, setResponsive] = useState(false);  
  const [ondom, setOndom] = useState(false);  


  const toggleMobileMenu=(e)=>{
    e.preventDefault()    
    if (!ondom){
      setOndom(true)
    }
    setResponsive(!responsive) 
  }
    useEffect(() => {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE');
      if (msie > 0) {
        setModal(true)
      }
    }, [])

  return (
    <section className={styles.layout}>
        <div className={styles.menu}> </div>
        <main>{children}</main> 
        <div className={styles.footer}></div> 
    </section>
  )
}


export default Layout