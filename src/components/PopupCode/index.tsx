import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  NameBar,
  ViewConteudo,
  ViewHeader,
  ImageBar,
  IconsFeedback,
  ViewFeedBack,
  TextFeedback,
  ViewDescription,
  TextDescription,
  IconsFeedback2,
  SignInButton,
  ButtonBackground,
  ButtonText,
} from './styles';
import imageBar from '../../assets/temp/beer.jpg';

const PopupCode: React.FC = () => {
  return (
    // <ModalBox>
    <Modal visible transparent animationType="slide">
      <ViewConteudo>
        <ViewHeader>
          <ImageBar source={imageBar} />
          <NameBar>Bar São Jorge</NameBar>
        </ViewHeader>
        <ViewFeedBack>
          <IconsFeedback>
            <Icon name="star" color="#FF6A13" size={24} />
            <TextFeedback>4.5</TextFeedback>
          </IconsFeedback>

          <IconsFeedback2>
            <Icon name="heart" color="#333333" size={24} />
            <TextFeedback>9.3k</TextFeedback>
          </IconsFeedback2>
        </ViewFeedBack>
        <ViewDescription>
          <TextDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris id scelerisque urna fermentum
            pellentesque id nunc.{' '}
          </TextDescription>
        </ViewDescription>
        <SignInButton activeOpacity={0.7}>
          <ButtonBackground colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <ButtonText>Criar Sala</ButtonText>
            <Icon name="plus" color="#fff" size={18} />
          </ButtonBackground>
        </SignInButton>
      </ViewConteudo>
    </Modal>
    // </ModalBox>
  );
};

export default PopupCode;
