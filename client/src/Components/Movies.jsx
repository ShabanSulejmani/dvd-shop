


export default function Movies(props) {
    const {name, genre, year, rating, thumb_url} = props.card
  return <>
    <p>{name}</p>
    <p>{genre}</p> 
    <p>{year}</p>
    <p>{rating}</p>
    <img src={thumb_url} />

      </>
}