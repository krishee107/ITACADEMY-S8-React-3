import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import axios from "axios"
import Starship from "./Starship/Starship";
import { Link } from "react-router-dom";

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    //Peticion a la API de Star Wars
    axios.get('https://swapi.dev/api/starships/')
      .then((res) => {
        setStarships(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="starships" style={{ color: `white` }}>
      <Navbar />
      {starships.length ? (
        <ul>
          {starships.map((starship, index) => {
            return (
              <Link to={"/starships/" + (index + 2)} key={index} >
                <Starship id={index} ship={starship} />
              </Link>
            )
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Starships