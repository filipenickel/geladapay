import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;
export const Input = styled(TextInput)`
  background: #fff;
  width: 316px;
  height: 48px;
  padding-left: 18px;
  border: 1px solid #eee;
  border-radius: 30px;
  margin-top: 24px;
`;

export const ContainerSearch = styled.View`
  align-items: center;
  flex-direction: row;
  position: absolute;
`;

export const IconSearch = styled(Icon)`
  top: 10px;
  left: 10px;
`;

export const BackgorundIcon = styled(LinearGradient)`
  position: absolute;
  border-radius: 30px;
  height: 42px;
  width: 42px;
  left: 270px;
  top: 27px;
`;
