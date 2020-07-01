import React from 'react';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Feather';

import { TouchableOpacity } from 'react-native';
import HavingFun from '../../assets/having_fun.svg';

import {
  Container,
  Header,
  Title,
  BlackTitle,
  OrangeTitle,
  Subtitle,
  Body,
  SignInButton,
  ButtonBackground,
  ButtonText,
  AccountLinks,
  SignupText,
  AccountLinksText,
  SocialNetworks,
  SNSButtons,
} from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>
          <BlackTitle>Bem-Vindo ao </BlackTitle>
          <OrangeTitle>Choppy</OrangeTitle>
        </Title>

        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem. </Subtitle>
      </Header>

      <Body>
        <SvgUri width="315" height="196" source={HavingFun} />
      </Body>

      <SignInButton activeOpacity={0.7}>
        <ButtonBackground colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <ButtonText>Entrar</ButtonText>
          <Icon name="arrow-right" color="#fff" size={18} />
        </ButtonBackground>
      </SignInButton>

      <AccountLinks>
        <TouchableOpacity>
          <SignupText>Cadastrar-se</SignupText>
        </TouchableOpacity>

        <AccountLinksText> | </AccountLinksText>

        <TouchableOpacity>
          <AccountLinksText>Esqueci a minha senha</AccountLinksText>
        </TouchableOpacity>
      </AccountLinks>

      <SocialNetworks>
        <SNSButtons>
          <Icon name="facebook" color="#000" size={24} />
        </SNSButtons>
        <SNSButtons>
          <Icon name="instagram" color="#000" size={24} />
        </SNSButtons>
        <SNSButtons>
          <Icon name="twitter" color="#000" size={24} />
        </SNSButtons>
      </SocialNetworks>
    </Container>
  );
};

export default Welcome;
