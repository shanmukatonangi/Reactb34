import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [products,setProducts]=useState([])


 async function fetchData() {
    let rawdata=await axios.get('https://dummyjson.com/products')
    setProducts(rawdata.data.products);
  }

  fetchData()

//https://dummyjson.com/products



  return (
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
      </div>)
      
      )}
    </div>
  )
}

export default App
