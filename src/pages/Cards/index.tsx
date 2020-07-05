import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import TempImage from '../../assets/temp/retailer_image.png';
import Zacarias from '../../assets/temp/zacarias.png';
import Aran from '../../assets/temp/aran.png';
import Emerson from '../../assets/temp/emerson.png';
import Filipe from '../../assets/temp/filipe.png';

import BottomNavigation from '../../components/BottomNavigation';
import VisaLogo from '../../assets/visalogo.png';

import {
  Styling,
  Title,
  ViewSaldo,
  TextTitle,
  ValueSaldo,
  AddSaldoText,
  ConfigCard,
  ViewBoxOptions,
  TextIcon,
  TextOption,
  ViewCardsAdd,
  TextTitleCards,
  ViewLogoCard,
  ImageBandeira,
  ViewNumberCard,
  NumberCard,
  ViewRow,
  StatusSaldo,
} from './styles';

const Cards: React.FC = () => {
  return (
    <>
      <Styling>
        <Title>Minha Carteira</Title>
        <ViewSaldo>
          <TextTitle>Créditos na carteira</TextTitle>
          <ValueSaldo>R$ 1.650,00</ValueSaldo>
          <AddSaldoText>Adicionados em 20/05/2020</AddSaldoText>
        </ViewSaldo>

        <ConfigCard>
          <ViewBoxOptions>
            <Icon name="plus" color="#FF6A13" size={30} />
            <TextOption>Adicionar Créditos</TextOption>
          </ViewBoxOptions>
          <ViewBoxOptions>
            <Icon name="credit-card" color="#FF6A13" size={30} />
            <TextOption>Adicionar Cartão</TextOption>
          </ViewBoxOptions>
          <ViewBoxOptions>
            <Icon name="file-text" color="#FF6A13" size={30} />
            <TextOption>Histórico de Pagamentos</TextOption>
          </ViewBoxOptions>
        </ConfigCard>

        <ViewCardsAdd>
          <TextTitleCards>Cartões adicionados</TextTitleCards>
          <ViewRow>
            <ViewLogoCard>
              <ImageBandeira source={VisaLogo} />
            </ViewLogoCard>
            <ViewNumberCard>
              <NumberCard>•••• •••• •••• 6699</NumberCard>
              <StatusSaldo>Adicionado em 03/07/2020</StatusSaldo>
            </ViewNumberCard>
          </ViewRow>
        </ViewCardsAdd>
      </Styling>
      <BottomNavigation />
    </>
  );
};

export default Cards;
