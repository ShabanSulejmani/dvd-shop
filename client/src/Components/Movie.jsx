import { NavLink } from "react-router";

export default function Movie({movie,addToCart,removeFromCart}) {
    return <>
        <h1>{movie.name}</h1>
        <NavLink to={"/card/" + movie.id} >
         <img src={movie.thumb_url} />
        </NavLink>
        <button onClick={() => addToCart(movie.name)}>Add Example Movie to Cart</button>
        <button onClick={() => removeFromCart(movie.name)}>Remove Example Movie from Cart</button>
        
    </>
    }