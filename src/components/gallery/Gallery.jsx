import Card from "../../components/card/Card"
import { Link } from 'react-router-dom';
import dataLogements from '../../data/logements.json';


export default function Gallery() {
 
  return (
    <div className="cards_container">
      {dataLogements.map((dataLogements) => (
        <Link className='card' to={`/logement/${dataLogements.id}`}>
          <Card key={dataLogements.id} data={dataLogements} />
        </Link>
      ))}
    </div>
  )
}
