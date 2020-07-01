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
  DivIconsSocial,
  ButtonIconSocial,
  DivGroup,
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

      <DivGroup>
        <BackgroundButton colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Button onPress={() => {}}>
            <SpanButton>ENTRAR</SpanButton>
            <Icon name="arrow-right" color="white" size={18} />
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
      </DivGroup>

      <DivIconsSocial>
        <ButtonIconSocial>
          <Icon name="facebook" color="black" size={24} />
        </ButtonIconSocial>

        <ButtonIconSocial>
          <Icon name="instagram" color="black" size={24} />
        </ButtonIconSocial>

        <ButtonIconSocial>
          <Icon name="twitter" color="black" size={24} />
        </ButtonIconSocial>
      </DivIconsSocial>
    </Body>
  );
};

export default WelCome;
