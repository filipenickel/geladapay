import styled from 'styled-components/native';
import { Thumbnail } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const ModalBox = styled.View`
  flex: 1;
  position:absolute
  width: 100%;
  height:100%
  background: #ffff;
  opacity: 0.3px;
  background: black;

`;
export const NameBar = styled.Text`
  font-weight: bold;
  font-size: 21px;
  margin-left: 12px;
`;
export const ViewConteudo = styled.View`
  flex: 1;
  background: #ffff;
  border-radius: 9px;
  margin: 30% 13%;
`;
export const ViewHeader = styled.View`
  flex-direction: row;
  margin-top: 60px;
  align-items: center;
  margin-left: 18px;
`;
export const ImageBar = styled(Thumbnail)`
  width: 60px;
  height: 60px;
`;

export const ViewFeedBack = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5%;
`;

export const IconsFeedback = styled.View`
  flex-direction: row;
  margin-left: 18px;
`;
export const IconsFeedback2 = styled.View`
  margin-left: 37px;
  flex-direction: row;
`;
export const TextFeedback = styled.Text`
  font-weight: normal;
  font-size: 15px;
  font-family: 'Lato_400Regular';
  margin-left: 3px;
  margin-top: 5px;
`;

export const ViewDescription = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const TextDescription = styled.Text`
  margin-left: 18px;
  font-size: 18px;
  font-family: 'Lato_400Regular';
  margin-top: 17px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  margin: 45px 0
  height: 48px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
  align-items:center
`;

export const ButtonBackground = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  width: 246px;
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
