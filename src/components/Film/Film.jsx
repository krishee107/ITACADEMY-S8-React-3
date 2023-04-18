import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './Film.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Film = () => {
  const { id } = useParams();
  const [film, setfilm] = useState([])

  useEffect(() => {
    //Peticion a la API de Star Wars
    axios.get('https://swapi.dev/api/films/' + id)
      .then((res) => {
        setfilm(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);


  return (
    <div className="filmInfo">
      <Navbar />
      {film.length != 0 ?
        <div>
          <h1>{film.title}</h1>
          <div className="filmInfo_content">
            <div className="filmInfo_img">
              <img src={"https://starwars-visualguide.com/assets/img/films/" + id + ".jpg"} alt={film.name} />
            </div>

            <div className="filmInfo_info">
              <div className="filmInfo_opening">OPENING CRAWL: <span>{film.opening_crawl}</span></div>
              <div className="filmtInfo_director">DIRECTOR: <span>{film.director}</span></div>
              <div className="filmInfo_release">RELEASE DATE: <span>{film.release_date}</span></div>
              <div className="filmInfo_producer">PRODUCER: <span>{film.producer}</span></div>
            </div>

          </div>
        </div>
        :
        <div> Loading... </div>
      }
    </div>
  )
}

export default Film