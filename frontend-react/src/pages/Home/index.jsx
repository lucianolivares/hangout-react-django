import React from 'react'
import AboutUs from '../../components/AboutUs'
import Contact from '../../components/Contact'
import Hero from '../../components/Hero'

import Categories from '../../components/Categories'
import Restaurants from '../../components/Restaurants'
import { PageContainer } from '../../globalStyles'

function Home () {
  return (
    <PageContainer>
      <Hero />
      <Restaurants />
      <Contact />
      <Categories />
      <AboutUs />
    </PageContainer>
  )
}

export default Home
