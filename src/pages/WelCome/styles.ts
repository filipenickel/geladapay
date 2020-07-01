import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Body = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`;

export const Title = styled.Text`
  color: #ff6a13;
  font-size: 30px;
  font-family: 'Lato_900Black';
`;

export const SubTitle = styled.Text`
  margin-top: 25px;
  font-family: 'Lato_400Regular';
  line-height: 22px;
  font-weight: normal;
  width: 297px;
  height: 44px;
  align-items: center;
  text-align: center;
`;

export const SpanButton = styled.Text`
  color: white;
`;

export const DivImg = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
`;

export const ButtonSpan = styled.TouchableOpacity`
  font-family: 'Lato_700Bold';
`;

export const Span = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
`;

export const BackgroundButton = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom:20px
  width: 316px;
  height: 48px;
  margin: 25px auto 56px auto;
`;

export const DivButtonFooter = styled.View`
  flex-direction: row;
  justify-content: center;
`;
