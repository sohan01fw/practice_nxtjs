import React from 'react'
import { useRouter } from 'next/router'
const routes = () => {
  const router = useRouter();
  const {routes} = router.query; 
  
  return (

    <div>This is {routes} page</div>
  )
}

export default routes;