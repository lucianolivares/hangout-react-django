import React from 'react';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';
import { PageContainer } from '../../globalStyles';

function AboutUsPage() {
  return (
    <PageContainer>
      <AboutUs />
      <Contact />
    </PageContainer>
  );
}

export default AboutUsPage;
