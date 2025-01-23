import { useState } from "react"
import Movies from "../Components/Movies.jsx"
import data from "../../public/data.js"



export default function Home() {
const movies = data
const [cart, setCart] = useState([])


function addToCart(name) {
    
  if (!cart.find(item => item.name == name)) {
      setCart([...cart, { "name": name, "amount": 1 }])
  } else {
      const tempCart = [...cart]
      const index = tempCart.findIndex(item => item.name == name)
      tempCart[index].amount += 1
      setCart(tempCart)
  }
}



 function removeFromCart(name) {
  const tempCart = [...cart]
  const index = tempCart.findIndex(item => item.name == name)

  if (!cart.find(item => item.name == name)) {
      alert("Can't find " + name + " in cart!")
  } else if (cart[index].amount > 1) {
      const tempCart = [...cart]
      tempCart[index].amount -= 1
      setCart(tempCart)
  } else if (cart[index].amount <= 1) {
      const newCart = cart.filter((item, i) => i !== index)
      setCart(newCart)
  }

}

return <>
    <h1>Movies</h1>
    <div id="homepage">
      {cart.map((item, index) =>  <p key={item.name + "-" + index}>{item.name}, {item.amount}</p>)}
      <section id="movieList">
        <Movies movies={movies} addToCart={addToCart} removeFromCart={removeFromCart} /> 
        {/* movies.map((movie, index) => (
    
        <div key={movie.name + "-" + index}>
       <img src={movie.thumb_url} alt="" />
        </div>

        ))
        */} 

      </section>
    </div>
  </>
}