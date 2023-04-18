import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1 style={{ textAlign: `center` }}>Star Wars - Starship list</h1>

      <div className="homeText" style={{ textAlign: `justify`, padding: `30px`, fontSize: `23px` }}>
        <p>
          ¡Bienvenido a nuestra página web dedicada a las naves de Star Wars! Aquí encontrarás una lista completa de todas las naves utilizadas en la famosa saga, junto con información detallada sobre cada una de ellas. Desde las icónicas X-Wing y Millennium Falcon, hasta las temibles naves imperiales y los cazas estelares, nuestra página tiene todo lo que necesitas para aprender sobre las naves de Star Wars.
        </p>

        <p>
          Cada nave viene con una descripción detallada, que incluye información sobre su diseño, capacidad, armamento y más. También puedes encontrar información sobre las apariciones de la nave en las películas y series de televisión de Star Wars, así como en los libros y cómics relacionados con la saga.
        </p>

        <p>
          Además de la información sobre cada nave, también ofrecemos una amplia variedad de recursos para los fans de Star Wars, como noticias y actualizaciones sobre la franquicia, reseñas de productos y guías de coleccionistas. ¡No te pierdas la oportunidad de sumergirte en el universo de Star Wars con nuestra página web dedicada a las naves de la saga!
        </p>
      </div>
    </div>
  )
}

export default Home