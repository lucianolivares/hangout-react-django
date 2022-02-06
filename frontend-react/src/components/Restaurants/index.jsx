import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, GridContainer, Title } from '../../globalStyles'
import data from './Data'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    setRestaurants(data)
  }, [])
  return (
    <>
      <Title className='primary'>Restaurantes</Title>
      <GridContainer>
        {restaurants.map((props) => (
          <Card key={props.name}>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <span>{props.address}</span>
            <Link to={`/restaurant-view/${props.name}`}>
              <button>Ver local</button>
            </Link>
          </Card>
        ))}
      </GridContainer>
    </>
  )
}

export default Restaurants
