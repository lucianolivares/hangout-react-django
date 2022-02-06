import React from 'react';
import { Link } from 'react-router-dom';
import { Card, GridContainer, Title } from '../../globalStyles';
import restaurants from './Data';

function Restaurants() {
  return (
    <>
      <Title className="primary">Restaurantes</Title>
      <GridContainer>
        {restaurants.map((props) => (
          <Card key={props.name}>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <span>{props.address}</span>
            <Link to={`/restaurant-view/${props.name}`}>
              <button type="button">Ver local</button>
            </Link>
          </Card>
        ))}
      </GridContainer>
    </>
  );
}

export default Restaurants;
