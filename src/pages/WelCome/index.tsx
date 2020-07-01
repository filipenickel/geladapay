import React from 'react';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  Button,
  Header,
  Span,
  ButtonSpan,
  DivButton,
  DivButtonFooter,
  DivImg,
  GradientLinear,
  SpanButton,
} from './styles';

const WelCome: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Bem-Vindo ao Choppy</Title>
        <Span>Lorem ipsum dolor sit amet, consectetur </Span>
      </Header>
      <DivImg>
        <SvgUri width="350" height="350" source={require('../../assets/having_fun.svg')} />
      </DivImg>

      <DivButton>
        <GradientLinear colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Button onPress={() => {}}>
            <SpanButton>ENTRAR</SpanButton>
            <Icon name="arrow-right" color="white" />
          </Button>
        </GradientLinear>
      </DivButton>

      <DivButtonFooter>
        <ButtonSpan onPress={() => {}}>
          <Span>Cadastrar-se </Span>
        </ButtonSpan>

        <Span>|</Span>

        <ButtonSpan onPress={() => {}}>
          <Span> Esqueci a minha senha</Span>
        </ButtonSpan>
      </DivButtonFooter>
    </Container>
  );
};

export default WelCome;
