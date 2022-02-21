import { Link } from 'wouter'
import { Title } from '../../globalStyles'
import { Body, Button, Container, HeroContent } from './styles'

function Hero () {
  return (
    <HeroContent>
      <Container>
        <Title>Reserva y Disfruta</Title>
        <Body>
          Los mejores restaurantes de tu ciudad esperan a que los visites
        </Body>
        <Link to='/sign-up'>
          <Button>Registrarte Ahora</Button>
        </Link>
      </Container>
    </HeroContent>
  )
}

export default Hero
