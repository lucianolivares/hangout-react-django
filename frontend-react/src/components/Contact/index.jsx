import { Button, Title } from '../../globalStyles'
import { ContactContainer } from './styles'

function Contact () {
  return (
    <ContactContainer>
      <Title>Quieres publicar tu local ?</Title>
      <p>
        Si quieres ser parte de esta red de reservas para restaurantes, solo
        escribenos seguro llegaremos a un acuerdo.
      </p>
      <Button white>Enviar email</Button>
    </ContactContainer>
  )
}

export default Contact
