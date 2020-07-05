import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Modal from '../../components/Modal';

import barImg from '../../assets/temp/barimage.jpg';
import UserPoint from '../../assets/UserPoint';
import {
  Input,
  Container,
  ContainerSearch,
  BackgorundIcon,
  ButtonSelectBar,
  TextsButton,
  ContainerBar,
  FormSearch,
  ViewTooltip,
  TextTitleTooltip,
  ViewFeedBack,
  TextFeedback,
  ViewImgText,
  Feedback,
  TooltipImage,
  NameBar,
  ViewHeader,
  ImageBarDescription,
  IconsFeedback,
  ViewPonts,
  TextPonts,
  ViewDescription,
  TextDescription,
  IconsFeedback2,
  SignInButton,
  ButtonBackground,
  ButtonText,
  ViewClose,
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
            latitude: 37.420475,
            longitude: -122.085366,
          }}
        >
          <Icon name="map-pin" color="#FF6A13" size={24} />

          <Callout tooltip onPress={handleOpen}>
            <ViewTooltip>
              <ViewImgText>
                <TooltipImage source={barImg} />

                <TextTitleTooltip>Bar São Jorge</TextTitleTooltip>
              </ViewImgText>

              <ViewFeedBack>
                <Feedback>
                  <Icon name="star" color="#FF6A13" size={24} />
                  <TextPonts>4.5</TextPonts>
                </Feedback>

                <Feedback>
                  <Icon name="heart" color="#333333" size={24} />
                  <TextPonts>9.3k</TextPonts>
                </Feedback>
              </ViewFeedBack>
            </ViewTooltip>
          </Callout>
        </Marker>
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
        <BottomNavigation />
        {/* Modal Bar Info */}
        <Modal isOpen={modalVisible}>
          <ViewClose onPress={handleClose}>
            <Icon name="x" color="#FF6A13" size={24} />
          </ViewClose>
          <ViewHeader>
            <ImageBarDescription source={barImg} />
            <NameBar>Bar São Jorge</NameBar>
          </ViewHeader>
          <ViewPonts>
            <IconsFeedback>
              <Icon name="star" color="#FF6A13" size={24} />
              <TextFeedback>4.5</TextFeedback>
            </IconsFeedback>

            <IconsFeedback2>
              <Icon name="heart" color="#333333" size={24} />
              <TextFeedback>9.3k</TextFeedback>
            </IconsFeedback2>
          </ViewPonts>
          <ViewDescription>
            <TextDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mauris id scelerisque urna fermentum
              pellentesque id nunc.{' '}
            </TextDescription>
          </ViewDescription>
          <SignInButton activeOpacity={0.7}>
            <ButtonBackground colors={['#BA0C2F', '#FF6A13']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <ButtonText>Criar uma mesa</ButtonText>
              <Icon name="plus" color="#fff" size={18} />
            </ButtonBackground>
          </SignInButton>
        </Modal>
      </ContainerSearch>
    </Container>
  );
};

export default Maps;
