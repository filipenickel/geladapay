import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, QRCodeBackground } from './styles';

const BottomNavigation: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleMyTable = useCallback(() => {
    navigation.navigate('MyTable');
  }, [navigation]);
  const handleMaps = useCallback(() => {
    navigation.navigate('Maps');
  }, [navigation]);
  const handleCards = useCallback(() => {
    navigation.navigate('Cards');
  }, [navigation]);

  return (
    <Container>
      <TouchableOpacity onPress={handleMaps}>
        <Icon name="map-pin" color={route.name === 'Maps' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyTable}>
        <Icon name="users" color={route.name === 'MyTable' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <QRCodeBackground start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ba0c2f', '#ff6a13']}>
          <Icon name="maximize" color="#fff" size={30} />
        </QRCodeBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCards}>
        <Icon name="credit-card" color={route.name === 'Cards' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color={route.name === '' ? '#ff6a13' : '#333'} size={24} />
      </TouchableOpacity>
    </Container>
  );
};

export default BottomNavigation;
