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
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  height: 45px;
  width: 100%;
`;
export const ButtonNavBar = styled.TouchableOpacity`
  margin: 0px 6%;
`;

export const BackgorundIconBar = styled(LinearGradient)`
  bottom: 12px;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 30px;
`;

// Estilização do ToolTip do Marker
export const ViewTooltip = styled.View`
  flex-direction: column;
  border-radius: 9px;
  background: #ffffff;
  min-width: 128.18px
  min-height: 88px;
  padding: 3px;
`;

export const ViewImgText = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ImageBar = styled.Text`
  border-radius: 50px;
`;

export const TooltipImage = styled.Image`
  border-radius: 30px;
  width: 45px;
  height: 45px;
`;

export const TextTitleTooltip = styled.Text`
  font-size: 18px;
  font-family: 'Lato_400Regular';
  align-items: center;
  max-width: 66.82px;
`;

export const ViewFeedBack = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
`;

export const Feedback = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextFeedback = styled.Text`
  margin-left: 6px;
`;
