import React,{useEffect,useState} from 'react'
import styles from '../../styles/Nav_pages.module.css'


const blogcontent = (props) => {
  
  
 function createMarkup(c) {
  return {__html: c};
}
     const [datas, setdatas] = useState(props.resjson)
  
  console.log(datas)

  

  return (
    <>
    <div className={styles.blog}>
        <h1>{datas.description}</h1>
    <p>{datas.content}</p>
    {datas && <div dangerouslySetInnerHTML={createMarkup(datas.Author)}></div>}
    
    
    </div>
    
    
    
    </>
  )
}

export async function getServerSideProps(context){
  
     const {slug} = context.query;
   
      
         const response = await fetch(`http://localhost:3000/api/blogs?slug=${slug}`);
          
      const resjson =await response.json();
      
     
    
    
  return{
    props:{resjson},
  }
}
export default blogcontent