import React, { useState, useEffect, useCallback } from 'react';
import { Alert, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import BottomNavigation from '../../components/BottomNavigation';
import Modal from '../../components/Modal';

import MapMarker from '../../assets/MapMarker';
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

const Maps: React.FC = () => {
  const { navigate } = useNavigation();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const navigateToMyTable = useCallback(() => {
    navigate('MyTable');
  }, [navigate]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Container>
        <MapView
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
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
            <MapMarker />
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.1343216,
              longitude: -34.8505928,
            }}
          >
            <Icon name="map-pin" color="#ff6a13" size={24} />

            <Callout tooltip onPress={openModal}>
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
          <Modal isOpen={isModalOpen}>
            <BarModalCloseButton onPress={closeModal}>
              <Icon name="x" size={24} />
            </BarModalCloseButton>
            <BarModalHeader>
              <BarModalImage isOpen={isModalOpen} source={TempImage} />
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
            <BarModalButton activeOpacity={0.7} onPress={navigateToMyTable}>
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
