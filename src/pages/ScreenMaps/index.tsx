import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { boolean } from 'yup';
import barImg from '../../assets/temp/barimage.jpg';
import PopupInfo from '../../components/PopupInfo';
import userPoint from '../../assets/user_point.svg';
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
  ViewTooltip,
  TextTitleTooltip,
  ViewFeedBack,
  TextFeedback,
  ViewImgText,
  ImageBar,
  Feedback,
  TooltipImage,
} from './styles';

interface userLocation {
  latitude: number;
  longitude: number;
}
interface Props {
  visible: boolean;
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const SreenMaps: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [modalVisible, setModalVisible] = useState(false);

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
  const handleClick = useCallback(() => {
    setModalVisible(true);
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
          <SvgUri source={userPoint} />
        </Marker>

        <Marker
          coordinate={{
            latitude: 37.420475,
            longitude: -122.085366,
          }}
        >
          <Icon name="map-pin" color="#FF6A13" size={24} />

          <Callout tooltip onPress={handleClick}>
            <ViewTooltip>
              <ViewImgText>
                <ImageBar>
                  <TooltipImage source={barImg} />
                </ImageBar>
                <TextTitleTooltip>Bar São Jorge</TextTitleTooltip>
              </ViewImgText>

              <ViewFeedBack>
                <Feedback>
                  <Icon name="star" color="#FF6A13" size={24} />
                  <TextFeedback>4.5</TextFeedback>
                </Feedback>

                <Feedback>
                  <Icon name="heart" color="#333333" size={24} />
                  <TextFeedback>9.3k</TextFeedback>
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
        <>
          <PopupInfo visible={modalVisible} />
        </>
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
