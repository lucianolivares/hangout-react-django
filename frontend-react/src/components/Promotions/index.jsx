import React from 'react';
import { Card, GridContainer, Title } from '../../globalStyles';
import promotions from './Data';

function Promotions() {
  return (
    <>
      <Title className="primary">Categorias</Title>
      <GridContainer>
        {promotions.map((promotion) => (
          <Card key={promotion.name}>
            <img src={promotion.image} alt={promotion.name} />
            <p>{promotion.name}</p>
            <button type="button">ver restaurantes</button>
          </Card>
        ))}
      </GridContainer>
    </>
  );
}

export default Promotions;
