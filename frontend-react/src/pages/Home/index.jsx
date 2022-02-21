import React, { lazy } from 'react'
import { PageContainer } from '../../globalStyles'
import Hero from '../../components/Hero'
import Restaurants from '../../components/Restaurants'

const Contact = lazy(() => import('../../components/Contact'))
const Categories = lazy(() => import('../../components/Categories'))
const AboutUs = lazy(() => import('../../components/AboutUs'))

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
