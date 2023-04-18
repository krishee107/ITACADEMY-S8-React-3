import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './Pilot.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pilot = () => {
  const { id } = useParams();
  const [pilot, setpilot] = useState([])

  useEffect(() => {
    //Peticion a la API de Star Wars
    axios.get('https://swapi.dev/api/people/' + id)
      .then((res) => {
        setpilot(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className="pilotInfo">
      <Navbar />
      {pilot.length != 0 ?
        <div>
          <div className="pilotInfo_content">
            <div className="pilotInfo_img">
              <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt={pilot.name} />
            </div>

            <div className="pilotInfo_info">
              <div className="pilot_name">NAME: <span>{pilot.name}</span></div>
              <div className="pilot_height">HEIGHT: <span>{pilot.height} CM</span></div>
              <div className="pilot_hair">HAIR COLOR: <span>{pilot.hair_color}</span></div>
              <div className="pilot_skin">SKIN COLOR: <span>{pilot.skin_color}</span></div>
              <div className="pilot_eye">EYE COLOR: <span>{pilot.eye_color}</span></div>
              <div className="pilot_gender">GENDER: <span>{pilot.gender}</span></div>
            </div>
          </div>
          <div className="pilotInfo_films">
            {
              pilot.films.map((f, index) => {
                const url = f.split("/");
                const film_id = url[url.length - 2]
                return <div className="pilotFilm" key={index}><img src={"https://starwars-visualguide.com/assets/img/films/" + film_id + ".jpg"} alt="" /></div>
              })
            }
          </div>
        </div>

        :
        <div>Loading...</div>
      }

    </div>
  )
}

export default Pilot