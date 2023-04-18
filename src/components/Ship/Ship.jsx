import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Ship.css'
import Navbar from "../Navbar/Navbar";

const Ship = () => {
  const { id } = useParams();
  const [ship, setShip] = useState([])

  useEffect(() => {
    //Peticion a la API de Star Wars
    axios.get('https://swapi.dev/api/starships/' + id)
      .then((res) => {
        setShip(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className="shipInfo">
      <Navbar />
      {ship.length != 0 ?
        <div>
          <h1>{ship.name}</h1>
          <div className="shipInfo_img">
            <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg"} alt={ship.name} />
          </div>
          <div className="shipInfo_content">
            <div className="shipInfo_model">MODEL: <span>{ship.model}</span></div>
            <div className="shipInfo_class">STARSHIP CLASS: <span>{ship.starship_class}</span></div>
            <div className="shipInfo_manufacturer">MANUFACTURER: <span>{ship.manufacturer}</span></div>
            <div className="shipInfo_cost">COST: <span>{ship.cost_in_credits} CREDITS</span></div>
          </div>

          <div className="shipInfo_footer">
            <div className="shipInfo_crew">
              <div className="shipInfo_crew_crew">CREW: <span>{ship.crew}</span></div>
              <div className="shipInfo_crew_passengers">PASSENGERS CAPACITY: <span>{ship.passengers}</span></div>
              <div className="shipInfo_crew_cargo">CARGO CAPACITY: <span>{ship.cargo_capacity} TONS</span></div>
              <div className="shipInfo_crew_consumables">CONSUMABLES: <span>{ship.consumables}</span></div>
              <div className="shipInfo_crew_pilots">PILOTS: <span>{ship.pilots.map((p, index) => {
                const url = p.split("/");
                const pilot_id = url[url.length - 2]
                return (
                  <div className="pilot" key={index}><img src={"https://starwars-visualguide.com/assets/img/characters/" + pilot_id + ".jpg"} alt={p} /></div>
                );
              })}</span></div>
            </div>

            <div className="shipInfo_ship">
              <div className="shipInfo_length">LENGTH: <span>{ship.length} METERS</span></div>
              <div className="shipInfo_speed">MAXIMUM ATMOSPHERING SPEED: <span>{ship.max_atmosphering_speed}  KM/H</span></div>
              <div className="shipInfo_rating">HYPERDRIVE RATING: <span>{ship.hyperdrive_rating}</span></div>
              <div className="shipInfo_speed_realspace">MAXMIUM SPEED IN REALSPACE: <span>{ship.MGLT} MGLT</span></div>
            </div>
          </div>
        </div>
        : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Ship