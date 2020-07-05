import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Modal from '../../components/Modal';

import UserPoint from '../../assets/UserPoint';
import TempImage from '../../assets/temp/retailer_image.png';

import {
  Container,
  MapTooltip,
  TooltipBarName,
  TooltipBarFeedback,
  Feedback,
  FeedbackText,
  UserInterface,
  SearchBar,
  SearchInput,
  SearchButtonBackground,
  SearchOptions,
  SearchOptionsPill,
  SearchOptionsPillText,
  BarModalCloseButton,
  BarModalHeader,
  BarModalImage,
  BarModalTitle,
  BarModalFeedbackSection,
  BarModalFeedback,
  BarModalFeedbackText,
  BarModalDescription,
  BarModalButton,
  BarModalButtonBackground,
  BarModalButtonText,
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

const Maps: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberModal, setNumberModal] = useState<number>(0);

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

  const handleOpen = useCallback(() => {
    setModalVisible(true);
    setNumberModal(0);
    console.log(modalVisible, setNumberModal);
  }, [modalVisible]);
  const handleClose = useCallback(() => {
    setModalVisible(false);
    console.log(modalVisible);
  }, [modalVisible]);

  return (
    <>
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
          >
            <UserPoint />
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.1343216,
              longitude: -34.8505928,
            }}
          >
            <Icon name="map-pin" color="#ff6a13" size={24} />

            <Callout tooltip onPress={handleOpen}>
              <MapTooltip>
                <TooltipBarName>Bar São Jorge</TooltipBarName>

                <TooltipBarFeedback>
                  <Feedback>
                    <Icon name="star" color="#ff6a13" size={18} />
                    <FeedbackText>4.5</FeedbackText>
                  </Feedback>
                  <Feedback>
                    <Icon name="heart" color="#ba0c2f" size={18} />
                    <FeedbackText>9.3k</FeedbackText>
                  </Feedback>
                </TooltipBarFeedback>
              </MapTooltip>
            </Callout>
          </Marker>
        </MapView>

        <UserInterface>
          <SearchBar>
            <SearchInput placeholder="Pesquisar por bar" />
            <SearchButtonBackground colors={['#BA0C2F', '#ff6a13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Icon name="search" color="#FFFFFF" size={21} />
            </SearchButtonBackground>
          </SearchBar>

          <SearchOptions>
            <SearchOptionsPill>
              <SearchOptionsPillText>Boteco</SearchOptionsPillText>
            </SearchOptionsPill>

            <SearchOptionsPill>
              <SearchOptionsPillText>Cervejaria</SearchOptionsPillText>
            </SearchOptionsPill>

            <SearchOptionsPill>
              <SearchOptionsPillText>Pino Bar</SearchOptionsPillText>
            </SearchOptionsPill>

            <SearchOptionsPill>
              <SearchOptionsPillText>Pub</SearchOptionsPillText>
            </SearchOptionsPill>
          </SearchOptions>
          <Modal isOpen={modalVisible}>
            <BarModalCloseButton onPress={handleClose}>
              <Icon name="x" size={24} />
            </BarModalCloseButton>
            <BarModalHeader>
              <BarModalImage isOpen={modalVisible} source={TempImage} />
              <BarModalTitle>Bar São Jorge</BarModalTitle>
            </BarModalHeader>
            <BarModalFeedbackSection>
              <BarModalFeedback>
                <Icon name="star" color="#ff6a13" size={18} />
                <BarModalFeedbackText>4.5</BarModalFeedbackText>
              </BarModalFeedback>
              <BarModalFeedback style={{ marginLeft: 37 }}>
                <Icon name="heart" color="#ba0c2f" size={18} />
                <BarModalFeedbackText>9.3k</BarModalFeedbackText>
              </BarModalFeedback>
            </BarModalFeedbackSection>
            <BarModalDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris id scelerisque urna fermentum
              pellentesque id nunc.
            </BarModalDescription>
            <BarModalButton activeOpacity={0.7}>
              <BarModalButtonBackground colors={['#BA0C2F', '#ff6a13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <BarModalButtonText>Criar uma mesa</BarModalButtonText>
                <Icon name="plus" color="#fff" size={18} />
              </BarModalButtonBackground>
            </BarModalButton>
          </Modal>
        </UserInterface>
      </Container>
      <BottomNavigation />
    </>
  );
};

export default Maps;
