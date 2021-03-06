import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  margin-top: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 18px;
`;

export const Title = styled.Text`
  color: #ff6a13;
  margin-left: 87px;
  font-family: 'Lato_900Black';
  font-size: 24px;
  text-transform: uppercase;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #333;
  line-height: 22px;
  text-align: center;
  margin-top: 30px;
  width: 80%;
`;

export const LoginForm = styled(Form)``;

export const Input = styled(TextInput)`
  background: #fff;
  width: 316px;
  height: 48px;
  padding-left: 18px;
  margin: 0 auto 30px;
  border: 1px solid #eee;
  border-radius: 30px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 316px;
  height: 48px;
  margin: 15px auto 56px auto;

  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
  border-radius: 30px;
`;

export const ButtonBackground = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
  color: #fff;
  margin-right: 3px;
`;
