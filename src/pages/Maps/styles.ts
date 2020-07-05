import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const MapTooltip = styled.View`
  width: 120px;
  height: 45px;
  background: #fff;
  padding: 0 6px;
  border-radius: 9px;
`;

export const TooltipBarName = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 18px;
`;

export const TooltipBarFeedback = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3px;
`;

export const Feedback = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FeedbackText = styled.Text`
  margin-left: 6px;
`;

export const UserInterface = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const SearchBar = styled.View`
  width: 90%;
`;

export const SearchInput = styled(TextInput)`
  background: #fff;
  height: 48px;
  padding-left: 21px;
  margin-top: 24px;
  border-radius: 30px;
  font-family: 'Lato_400Regular';
  font-size: 18px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
`;

export const SearchButtonBackground = styled(LinearGradient)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 30px;
  bottom: 3px;
  right: 3px;
`;

export const SearchOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 19px;
`;

export const SearchOptionsPill = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 4px 12px;
  border-radius: 30px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
`;

export const SearchOptionsPillText = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 15px;
`;

export const BarModalCloseButton = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const BarModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BarModalImage = styled.Image<ModalProps>`
  ${props => (props.isOpen ? 'width: 60px; height: 60px;' : 'width: 0; height: 0')};
  border-radius: 30px;
`;

export const BarModalTitle = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 21px;
  margin-left: 12px;
`;

export const BarModalFeedbackSection = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const BarModalFeedback = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BarModalFeedbackText = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 15px;
  margin-left: 3px;
`;

export const BarModalDescription = styled.Text`
  flex: 1;
  font-family: 'Lato_400Regular';
  font-size: 18px;
  margin-top: 17px;
`;

export const BarModalButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin-bottom: 45px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.18);
`;

export const BarModalButtonBackground = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const BarModalButtonText = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  margin-right: 3px;
`;
