import React from 'react'
import { useParams } from 'react-router-dom'
import { PageContainer, Title } from '../../globalStyles'

function Menu () {
  const { id } = useParams()
  return (
    <PageContainer>
      <Title>{id}</Title>
    </PageContainer>
  )
}

export default Menu
