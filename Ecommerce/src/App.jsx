import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
  let input=useRef(null)


 async function fetchData() {
    let rawdata=await axios.get('https://dummyjson.com/products')
    setProducts(rawdata.data.products);
   
  }

  
  useEffect(()=>{
    fetchData()
  },[])


//https://dummyjson.com/products

async function Addtocart(id){
 
  let addedproduct=await products.find((item)=>item.id===id)
  // console.log(addedproduct)
  // console.log(id)
  // console.log([...cart,addedproduct])
  setCart( [...cart,addedproduct] )
  
   console.log(cart)
}


function Search(){
  let filter=products.filter((item)=>item.title.toLowerCase().includes(input.current.value.toLowerCase()))
  setProducts([...filter])
  console.log(filter)
}



  return (


   <>
   <div style={{width:"500px",height:"500px",border:"1px solid black",overflow:"scroll"}}>Cart

{cart.map((item)=>(<div key={item.id} style={{border:"1px solid black",margin:"10px"}}>
  <h1>{item.title}</h1>
  <img src={item.thumbnail} alt={item.title} />
  <p>Price: ${item.price}</p>
</div>))}


   </div>


   <input ref={input}/><button onClick={Search}>Search Button</button>
   
    <div style={{textAlign:"center",border:"2px solid black",margin:"20px",display:"grid",gridTemplateColumns:"auto auto auto",gap:"20px",padding:"20px"}}>
     {products.map((item)=>(<div style={{border:"1px solid black"}} key={item.id}>
        <h1>{item.title}</h1>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Rating: {item.rating}</p>
        <p>Stock: {item.stock}</p>
        <p>Brand: {item.brand}</p>
        <p>Category: {item.category}</p>
        <button onClick={()=>Addtocart(item.id)} style={{padding:"5px",border:"1px solid black"}}>Add to Cart</button>
      </div>)
      
      )}
    </div>
   
   
   </>
  )
}

export default App
