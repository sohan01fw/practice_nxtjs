import React,{useState,useEffect} from 'react'
import styles from '../styles/Nav_pages.module.css'
import Link from 'next/link';


const blog = (props) => {
  const [first, setfirst] = useState(props.getdata) 

  return (<>
  
    <div className={styles.blog}>
        <h1>Hey this is blog page</h1>
  
      {first.map((data)=>{
      
       return <>

       <Link  href={`/blogpost/${data.slug}`}><h1  className={styles.firsth1}>{data.slug}</h1></Link>
        
       
       </>
      
      })}
       
    </div>
    </>
  )
}
export async function getServerSideProps(context) {
   console.log("useeffect is running")
   const data = await fetch('http://localhost:3000/api/blogsdata')
      let getdata =await data.json();

      
    
  return {
    props: {getdata}, // will be passed to the page component as props
  }
}
export default blog