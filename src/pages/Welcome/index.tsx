import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import HavingFun from '../../assets/HavingFun';

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
  const { navigate } = useNavigation();

  const navigateToLogin = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <Title>
          <BlackTitle>Bem-Vindo ao </BlackTitle>
          <OrangeTitle>Gelada Pay</OrangeTitle>
        </Title>

        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem. </Subtitle>
      </Header>

      <Body>
        <HavingFun />
      </Body>

      <SignInButton activeOpacity={0.7} onPress={navigateToLogin}>
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
