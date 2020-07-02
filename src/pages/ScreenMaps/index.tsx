import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

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
} from './styles';

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
          <TextsButton>teste</TextsButton>
        </NavContainer>
      </ContainerSearch>
    </Container>
  );
};

export default SreenMaps;
