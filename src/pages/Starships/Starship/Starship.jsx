import './Starship.css';

const Starship = ({ ship }, props) => {
  return (
    <div className="ship">
      {props.id}
      <h1>{ship.name}</h1>
      <h2>{ship.model}</h2>
    </div>

  )
}

export default Starship