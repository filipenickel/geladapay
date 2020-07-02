import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Input = styled(TextInput)`
  background: #fff;
  height: 48px;
  padding-left: 18px;
  border: 1px solid #eee;
  border-radius: 30px;
  margin-top: 24px;
  font-size: 18px;
  font-family: 'Lato_400Regular';
`;

export const ContainerSearch = styled.View`
  flex: 1;
  position: absolute;
  height: 100%;
  width:100%
  justify-content: space-between;
  align-items: center;

`;

export const FormSearch = styled.View``;

export const BackgorundIcon = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 30px;
  height: 42px;
  width: 42px;
  bottom: 3px;
  right: 3px;
`;

export const ContainerBar = styled.View`
  flex-direction: row;
  width: 338px;
  height: 30px;
  justify-content: space-between;
  top: 19px;
`;

export const ButtonSelectBar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
`;

export const TextsButton = styled.Text`
  font-size: 15px;
  font-family: 'Lato_400Regular';
  margin: 0 12px;
`;

export const NavContainer = styled.View`
  background: #f6f6f6;
  align-self: center;
  height: 45px;
  width: 100%;
`;
