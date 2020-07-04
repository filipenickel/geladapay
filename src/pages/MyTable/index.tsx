import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import TempImage from '../../assets/temp/retailer_image.png';
import Zacarias from '../../assets/temp/zacarias.png';
import Aran from '../../assets/temp/aran.png';
import Emerson from '../../assets/temp/emerson.png';
import Filipe from '../../assets/temp/filipe.png';

import BottomNavigation from '../../components/BottomNavigation';

import {
  Styling,
  Title,
  RetailerInfo,
  RetailerImage,
  RetailerTitle,
  TableNumber,
  TableOptions,
  TableOptionsPill,
  TableOptionsText,
  TableParticipants,
  TableParticipantsInfo,
  ParticipantsNumber,
  ParticipantsList,
  Participant,
  ParticipantImage,
  ParticipantInfo,
  ParticipantName,
  SocialNetworks,
  SNSIconBackground,
} from './styles';

const MyTable: React.FC = () => {
  return (
    <>
      <Styling>
        <Title>Minha mesa</Title>
        <RetailerInfo>
          <RetailerImage source={TempImage} />
          <View>
            <RetailerTitle>Bar São Jorge</RetailerTitle>
            <TableNumber>Mesa #44</TableNumber>
          </View>
        </RetailerInfo>
        <TableOptions>
          <TableOptionsPill>
            <Icon name="dollar-sign" size={18} />
            <TableOptionsText style={{ marginLeft: 1 }}>Ver a comanda</TableOptionsText>
          </TableOptionsPill>
          <TableOptionsPill>
            <Icon name="star" size={18} color="#ff6a13" />
            <TableOptionsText>Avaliar</TableOptionsText>
          </TableOptionsPill>
        </TableOptions>
        <TableParticipants>
          <TableParticipantsInfo>
            <ParticipantsNumber>Amigos na mesa (4)</ParticipantsNumber>
            <Icon name="plus" size={21} />
          </TableParticipantsInfo>
          <ParticipantsList>
            <Participant>
              <ParticipantImage source={Zacarias} />
              <ParticipantInfo>
                <ParticipantName>Zacarias Torrezão (Eu)</ParticipantName>
                <SocialNetworks>
                  <SNSIconBackground style={{ backgroundColor: '#1877f2' }}>
                    <Icon name="facebook" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#1da1f2' }}>
                    <Icon name="twitter" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#007bb5' }}>
                    <Icon name="linkedin" size={14} color="#fff" />
                  </SNSIconBackground>
                </SocialNetworks>
              </ParticipantInfo>
            </Participant>
            <Participant>
              <ParticipantImage source={Aran} />
              <ParticipantInfo>
                <ParticipantName>Aran Leite</ParticipantName>
                <SocialNetworks>
                  <SNSIconBackground style={{ backgroundColor: '#c32aa3' }}>
                    <Icon name="instagram" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#007bb5' }}>
                    <Icon name="linkedin" size={14} color="#fff" />
                  </SNSIconBackground>
                </SocialNetworks>
              </ParticipantInfo>
            </Participant>
            <Participant>
              <ParticipantImage source={Emerson} />
              <ParticipantInfo>
                <ParticipantName>Emerson Dias</ParticipantName>
                <SocialNetworks>
                  <SNSIconBackground style={{ backgroundColor: '#1877f2' }}>
                    <Icon name="facebook" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#c32aa3' }}>
                    <Icon name="instagram" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#1da1f2' }}>
                    <Icon name="twitter" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#007bb5' }}>
                    <Icon name="linkedin" size={14} color="#fff" />
                  </SNSIconBackground>
                </SocialNetworks>
              </ParticipantInfo>
            </Participant>
            <Participant>
              <ParticipantImage source={Filipe} />
              <ParticipantInfo>
                <ParticipantName>Filipe Nickel</ParticipantName>
                <SocialNetworks>
                  <SNSIconBackground activeOpacity={0.2} style={{ backgroundColor: '#1877f2' }}>
                    <Icon name="facebook" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#c32aa3' }}>
                    <Icon name="instagram" size={14} color="#fff" />
                  </SNSIconBackground>
                  <SNSIconBackground style={{ backgroundColor: '#007bb5' }}>
                    <Icon name="linkedin" size={14} color="#fff" />
                  </SNSIconBackground>
                </SocialNetworks>
              </ParticipantInfo>
            </Participant>
          </ParticipantsList>
        </TableParticipants>
      </Styling>
      <BottomNavigation />
    </>
  );
};

export default MyTable;
