


export default function Movies(props) {
    const {name, genre, thumb_url} = props.card
  return <>
  <section id="movieName">
    <p>{name}</p>
    <p id="genre">{genre}</p>
    <img src={thumb_url} />
    </section>
      </>
}