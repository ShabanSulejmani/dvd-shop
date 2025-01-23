
import { NavLink } from "react-router"
import Movie from "./Movie.jsx"



export default function Movies({ movies, addToCart ,removeFromCart})  {
  return (
    <div>
     
      {movies.map((movie, index) => (
        <Movie key={movie.name + "-" + index} movie={movie} addToCart={addToCart} removeFromCart={removeFromCart}/>
      ))}
    </div>
  );
}

/*
    return <div>
        <p>{name}</p>
        <p>{genre}</p>  
       
        <button onClick={() => addToCart(name)}>Add to cart</button>
        <button onClick={() => removeFromCart(name)}>Remove from cart</button>
    </div>*/
