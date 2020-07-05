import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, QRCodeBackground } from './styles';

const BottomNavigation: React.FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const navigateToMyTable = useCallback(() => {
    navigate('MyTable');
  }, [navigate]);
  const navigateToMaps = useCallback(() => {
    navigate('Maps');
  }, [navigate]);
  const navigateToWallet = useCallback(() => {
    navigate('Wallet');
  }, [navigate]);

  return (
    <Container>
      <TouchableOpacity onPress={navigateToMaps}>
        <Icon name="map-pin" color={route.name === 'Maps' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToMyTable}>
        <Icon name="users" color={route.name === 'MyTable' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <QRCodeBackground start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ba0c2f', '#ff6a13']}>
          <Icon name="maximize" color="#fff" size={30} />
        </QRCodeBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToWallet}>
        <Icon name="credit-card" color={route.name === 'Wallet' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color={route.name === '' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
    </Container>
  );
};

export default BottomNavigation;
