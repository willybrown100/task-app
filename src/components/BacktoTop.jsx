import { useEffect, useState } from 'react';
import styles from './BacktoTop.module.css'

function BacktoTop() {
 const [backTop,setBackTop]=useState(false)
//  useEffect(()=>{
// window.addEventListener("scroll",()=>{
//  if(window.scrollY>100){
//   setBackTop(true)
//  }else{
//   setBackTop(false)
//  }
// })
//  },[])

 const scrollUp= ()=>{
window.scrollTo({
 top:0,
 behavior:"smooth"
})
 }
 return (
   <div className={styles.backTotopCon}>
  
       <button className={styles.backTotop} onClick={scrollUp}>
         back to top
       </button>
   
   </div>
 );
}

export default BacktoTop
