import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const GradientLinear = styled(LinearGradient)`
  border-radius: 30px;
  margin: 0 30px;
  height: 50px;
  justify-content: center;
  box-shadow: 0px 3px 9px;
`;
export const SpanButton = styled.Text`
  color: white;
`;
export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: #ff6a13;
  font-size: 30px;
  line-height: 22px;
`;
export const DivImg = styled.View`
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
`;
export const ButtonSpan = styled.TouchableOpacity``;

export const DivButton = styled.View`
flex:1
  height: 130px;
  margin-top: 20px;
`;
export const DivButtonFooter = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Span = styled.Text`
  font-size: 18px;
`;
