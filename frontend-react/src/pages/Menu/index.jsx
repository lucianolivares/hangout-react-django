import React, { useEffect, useState } from 'react'
import { PageContainer, Title } from '../../globalStyles'
import data from '../../components/Restaurants/Data'

function Menu (props) {
  const { id } = props.params
  const [restorant, setRestorant] = useState({})

  useEffect(() => {
    const singleData = data.find(obj => obj.id === parseInt(id))
    setRestorant(singleData)
  })
  return (
    <PageContainer>
      <Title>{restorant.name}</Title>
    </PageContainer>
  )
}

export default Menu
