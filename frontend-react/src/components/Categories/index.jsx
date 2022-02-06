import { useEffect, useState } from 'react'
import { Card, GridContainer, Title } from '../../globalStyles'
import data from './Data'

function Categories () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(data)
  }, [])

  return (
    <>
      <Title className='primary'>Categorias</Title>
      <GridContainer>
        {categories.map((promotion) => (
          <Card key={promotion.name}>
            <img src={promotion.image} alt={promotion.name} />
            <p>{promotion.name}</p>
            <button>ver restaurantes</button>
          </Card>
        ))}
      </GridContainer>
    </>
  )
}

export default Categories
