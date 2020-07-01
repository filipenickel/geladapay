import React from 'react';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Feather';
import {
  Body,
  Title,
  Button,
  Header,
  Span,
  SubTitle,
  ButtonSpan,
  DivButtonFooter,
  DivImg,
  BackgroundButton,
  SpanButton,
} from './styles';

const WelCome: React.FC = () => {
  return (
    <Body>
      <Header>
        <Title>Bem-Vindo ao Choppy</Title>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem. </SubTitle>
      </Header>

      <DivImg>
        <SvgUri width="315" height="315" source={require('../../assets/having_fun.svg')} />
      </DivImg>

      <BackgroundButton colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Button onPress={() => {}}>
          <SpanButton>ENTRAR</SpanButton>
          <Icon name="arrow-right" color="white" />
        </Button>
      </BackgroundButton>

      <DivButtonFooter>
        <ButtonSpan onPress={() => {}}>
          <Span>Cadastrar-se </Span>
        </ButtonSpan>

        <Span>|</Span>

        <ButtonSpan onPress={() => {}}>
          <Span> Esqueci a minha senha</Span>
        </ButtonSpan>
      </DivButtonFooter>
    </Body>
  );
};

export default WelCome;
