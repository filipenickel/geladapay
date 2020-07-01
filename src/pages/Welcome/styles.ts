import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 80%;
`;

export const Title = styled.View`
  flex-direction: row;
  margin: 60px 0 45px;
`;

export const BlackTitle = styled.Text`
  font-family: 'Lato_900Black';
  font-size: 30px;
  color: #333;
`;

export const OrangeTitle = styled.Text`
  font-family: 'Lato_900Black';
  font-size: 30px;
  color: #ff6a13;
`;

export const Subtitle = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 18px;
  color: #333;
  line-height: 22px;
  text-align: center;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 316px;
  height: 48px;

  margin: 0 auto;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
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
  text-transform: uppercase;
  margin-right: 3px;
`;

export const AccountLinks = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 24px 0 30px;
`;

export const SignupText = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
`;

export const AccountLinksText = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 18px;
`;

export const SocialNetworks = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 195px;
  margin: 0 auto 31px;
`;

export const SNSButtons = styled.TouchableOpacity`
  background: white;
  padding: 10px;
  border-radius: 22px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
`;
