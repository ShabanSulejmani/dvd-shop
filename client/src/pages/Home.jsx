import { useState } from "react"
import Movie from "../Components/Movies.jsx"
import data from "../../public/data.js"

export default function Home() {
const movies = data


return <>
    <h1>Movies</h1>
    <div id="homepage">
      <section id="movieList">
        {movies.map((movie, index) => (
          <Movie key={movie.name + "-" + index} card={movie} />
        ))}
      </section>
    </div>
  </>
}