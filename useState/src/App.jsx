import React, { useState } from 'react'

const App = () => {
let product={
  name:"Iphone",
  price:70000,
  color:"black"
}

let [cart,setCart]=useState({carttitle:"",cartprice:0})

function Addtocart(){

setCart(
  {carttitle:product.name,
    cartprice:product.price
  })



}



  return (
    <div>


      <h1>Product name:{product.name}</h1>
      <h1>Product price:{product.price}</h1>
      <h1>Product color:{product.color}</h1>

      <button onClick={Addtocart}>Add to cart</button>

      <h1>Cart Items</h1>
      <h1>Cart Title:{cart.carttitle}</h1>
      <h1>Cart Price:{cart.cartprice}</h1>

    </div>
  )
}

export default App


































// import React, { useRef, useState } from 'react'

// const App = () => {
//   let input1=useRef();
//   let input2=useRef();

//   let [Result,setResult]=useState(0)

//   function Plus(){


//     setResult(parseInt(input1.current.value) + parseInt(input2.current.value))

//   }




//   return (
//     <div>
//       <input type="number"  placeholder='enter num 1' ref={input1} />
//       <br />
//       <input type="number" placeholder='enter num 2' ref={input2} />
//       <br />
//       <button onClick={Plus}>+</button>
//       <button>-</button>
//       <button>*</button>
//       <button>/</button>
//       <h1>Result={Result}</h1>
      
//     </div>
//   )
// }

// export default App
































// // import React, { useState } from 'react'

// // const App = () => {

// // //  let count=0;

// //   let [count,setCount]=useState(0)


// // function Add(){
// // //  count=count+1

// // setCount(count+1)
// //   console.log(count)

// // }

// // function Sub(){
// //   //count=count-1

// //   setCount(count-1)
// //   console.log(count)

// // }

// //   return (
// //     <div>
// //       <button onClick={Sub}>-</button>
// //       <h1>{count}</h1>
// //       <button onClick={Add}>+</button>
// //     </div>
// //   )
// // }

// // export default App
