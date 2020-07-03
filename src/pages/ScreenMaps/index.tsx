import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import {
  Input,
  Container,
  ContainerSearch,
  BackgorundIcon,
  ButtonSelectBar,
  TextsButton,
  ContainerBar,
  FormSearch,
  NavContainer,
  ButtonNavBar,
  BackgorundIconBar,
} from './styles';

interface userLocation {
  latitude: number;
  longitude: number;
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const SreenMaps: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    async function loadPosition(): Promise<number[] | undefined> {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização');

        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  return (
    <Container>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: initialPosition[0],
          longitude: initialPosition[1],
          latitudeDelta: 0.011,
          longitudeDelta: 0.011,
        }}
      >
        <Marker
          coordinate={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
          }}
          title="teste"
          description="description"
        />
      </MapView>

      <ContainerSearch>
        <View>
          <FormSearch>
            <Input placeholder="Pesquisar por bar" />
            <BackgorundIcon colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Icon name="search" color="#FFFFFF" size={21} />
            </BackgorundIcon>
          </FormSearch>

          <ContainerBar>
            <ButtonSelectBar>
              <TextsButton>Boteco</TextsButton>
            </ButtonSelectBar>

            <ButtonSelectBar>
              <TextsButton>Cervejaria</TextsButton>
            </ButtonSelectBar>

            <ButtonSelectBar>
              <TextsButton>Pino Bar</TextsButton>
            </ButtonSelectBar>

            <ButtonSelectBar>
              <TextsButton>Pub</TextsButton>
            </ButtonSelectBar>
          </ContainerBar>
        </View>

        <NavContainer>
          <ButtonNavBar>
            <Icon name="map-pin" color="#FF6A13" size={24} />
          </ButtonNavBar>
          <ButtonNavBar>
            <Icon name="users" color="#333333" size={24} />
          </ButtonNavBar>
          <ButtonNavBar>
            <BackgorundIconBar colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Icon name="maximize" color="#FFFFFF" size={30} />
            </BackgorundIconBar>
          </ButtonNavBar>
          <ButtonNavBar>
            <Icon name="credit-card" color="#333333" size={24} />
          </ButtonNavBar>
          <ButtonNavBar>
            <Icon name="heart" color="#333333" size={24} />
          </ButtonNavBar>
        </NavContainer>
      </ContainerSearch>
    </Container>
  );
};

export default SreenMaps;
