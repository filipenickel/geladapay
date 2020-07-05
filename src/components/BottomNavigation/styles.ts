import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  width: 100%;
`;

export const QRCodeBackground = styled(LinearGradient)`
  bottom: 12px;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 30px;
`;
