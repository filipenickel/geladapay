import styled from 'styled-components/native';

export const Styling = styled.View`
  flex: 1;
  margin: 24px 18px;
`;

export const Title = styled.Text`
  font-family: 'Lato_900Black';
  font-size: 24px;
  color: #ff6a13;
  text-transform: uppercase;
  align-self: center;
`;

export const RetailerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const RetailerImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 12px;
`;

export const RetailerTitle = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 21px;
`;

export const TableNumber = styled.Text`
  font-size: 17px;
`;

export const TableOptions = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const TableOptionsPill = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 4px 12px;
  margin-right: 12px;
  border-radius: 30px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
`;

export const TableOptionsText = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 15px;
  margin-left: 6px;
`;

export const TableParticipants = styled.View`
  margin-top: 30px;
`;

export const TableParticipantsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ParticipantsNumber = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
`;

export const ParticipantsList = styled.View`
  margin-top: 21px;
`;

export const Participant = styled.View`
  flex-direction: row;
  margin-bottom: 21px;
`;

export const ParticipantImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
`;

export const ParticipantInfo = styled.View`
  margin-left: 15px;
`;

export const ParticipantName = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 16px;
  margin-bottom: 6px;
`;

export const SocialNetworks = styled.View`
  flex-direction: row;
`;

export const SNSIconBackground = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 12px;
`;
