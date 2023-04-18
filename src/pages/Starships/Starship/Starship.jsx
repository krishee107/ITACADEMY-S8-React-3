import './Starship.css';

const Starship = ({ ship }) => {
  return (
    <div className="ship">
      <h1>{ship.name}</h1>
      <h2>{ship.model}</h2>
    </div>
  )
}

export default Starship