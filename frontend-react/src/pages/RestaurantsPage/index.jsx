import React from 'react';
import Contact from '../../components/Contact';
import Restaurants from '../../components/Restaurants';
import { PageContainer } from '../../globalStyles';

function RestaurantsPage() {
  return (
    <PageContainer>
      <Restaurants />
      <Contact />
    </PageContainer>
  );
}

export default RestaurantsPage;
