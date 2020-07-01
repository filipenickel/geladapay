import React, { useRef, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import SvgUri from 'react-native-svg-uri';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FormHandles } from '@unform/core';

import BeerCelebration from '../../assets/beer_celebration.svg';

import {
  Container,
  Header,
  Title,
  Body,
  Description,
  LoginForm,
  Input,
  Button,
  ButtonBackground,
  ButtonText,
} from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Icon name="arrow-left" color="#ff6a13" size={24} />
        </TouchableOpacity>
        <Title>Entrada</Title>
      </Header>
      <Body>
        <SvgUri width="210" height="181" source={BeerCelebration} />
        <Description>Lorem ipsum amet, consectetur adipiscing elit.</Description>
      </Body>
      <LoginForm ref={formRef} onSubmit={() => handleSubmit()}>
        <Input placeholder="Nº de telefone ou e-mail" />
        <Input placeholder="Senha" />
        <Button>
          <ButtonBackground start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#BA0C2F', '#FF6A13']}>
            <ButtonText>Entrar</ButtonText>
            <Icon name="check" color="#fff" size={24} />
          </ButtonBackground>
        </Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
