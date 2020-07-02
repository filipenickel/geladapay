import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import { Input, Container, IconSearch, ContainerSearch, BackgorundIcon, ButtonSearch } from './styles';

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const SreenMaps: React.FC = () => {
  return (
    <Container>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <ContainerSearch>
        <Input placeholder="Pesquisar por bar" />
        <BackgorundIcon colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <IconSearch name="search" color="#FFFFFF" size={24} />
        </BackgorundIcon>
      </ContainerSearch>
    </Container>
  );
};

export default SreenMaps;
