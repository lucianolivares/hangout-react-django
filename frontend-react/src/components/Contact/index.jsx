import React from 'react';
import { Button, Title } from '../../globalStyles';

function Contact() {
  return (
    <div className="secondary-bg">
      <Title>Quieres publicar tu local ?</Title>
      <p>
        Si quieres ser parte de esta red de reservas para restaurantes, solo
        escribenos seguro llegaremos a un acuerdo.
      </p>
      <Button white>Enviar email</Button>
    </div>
  );
}

export default Contact;
