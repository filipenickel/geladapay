import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title, Description, Button, ButtonText } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Icon name="arrow-left" />
      <Title>Entrada</Title>
      <Description>Lorem ipsum amet, consectetur adipiscing elit.</Description>
      <Button>
        <ButtonText>Entrar</ButtonText>
        <Icon name="check" />
      </Button>
    </Container>
  );
};

export default Login;
