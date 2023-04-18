import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import axios from "axios"
import Starship from "./Starship/Starship";
import { Link } from "react-router-dom";
import './Starships.css'

const Starships = () => {
  const [starships, setStarships] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    //Peticion a la API de Star Wars
    axios.get('https://swapi.dev/api/starships?page=' + page)
      .then((res) => {
        setStarships(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [page])

  const handlePage = () => {
    if (page < 3)
      setPage(page + 1)
    else
      setPage(1)
  }

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

      <button onClick={handlePage}>View more</button>
    </div>
  )
}

export default Starships