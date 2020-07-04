import React, { useRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationError';

import BeerCelebration from '../../assets/BeerCelebration';

import {
  Container,
  Header,
  Title,
  Body,
  Description,
  LoginForm,
  Input,
  LoginButton,
  ButtonBackground,
  ButtonText,
} from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const PasswordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleLogin = useCallback(async (data: LoginFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      Alert.alert('Debug de dev JavaScript', 'console.log()');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque as credenciais');
    }
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" color="#ff6a13" size={24} />
        </TouchableOpacity>
        <Title>Entrada</Title>
      </Header>
      <Body>
        <BeerCelebration />
        <Description>Lorem ipsum amet, consectetur adipiscing elit.</Description>
      </Body>
      <LoginForm ref={formRef} onSubmit={handleLogin}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          placeholder="Nº de telefone ou e-mail"
          returnKeyType="next"
          onSubmitEditing={() => {
            PasswordInputRef.current?.focus();
          }}
        />
        <Input
          ref={PasswordInputRef}
          name="password"
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
        <LoginButton
          activeOpacity={0.7}
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          <ButtonBackground start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#BA0C2F', '#FF6A13']}>
            <ButtonText>Entrar</ButtonText>
            <Icon name="check" color="#fff" size={24} />
          </ButtonBackground>
        </LoginButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
