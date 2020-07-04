import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, QRCodeBackground } from './styles';

const BottomNavigation: React.FC = () => {
  const route = useRoute();

  return (
    <Container>
      <TouchableOpacity>
        <Icon name="map-pin" color={route.name === '' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="users" color={route.name === 'MyTable' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <QRCodeBackground start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ba0c2f', '#ff6a13']}>
          <Icon name="maximize" color="#fff" size={30} />
        </QRCodeBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="credit-card" color={route.name === '' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color={route.name === '' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
    </Container>
  );
};

export default BottomNavigation;
