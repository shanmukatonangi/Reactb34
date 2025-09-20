import React from 'react'

const App = () => {
   

   

  //http:localhost:8000 

let res= await  axios.get('http://localhost:8000')
  return (
    <div>


{res.data.map((item)=><h1>{item.name}</h1>)}
       
      
    </div>
  )
}

export default App
