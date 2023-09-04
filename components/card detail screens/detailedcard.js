import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';

const images = [
  'https://i.pinimg.com/originals/e3/5b/27/e35b27b0595bfcb62417411d626327ad.jpg',
  'https://i.pinimg.com/originals/91/d3/af/91d3af849600c3984af6d9c00b89cf1c.jpg',
  'https://i.pinimg.com/originals/d1/c3/7e/d1c37e98fcaf4139a602a176b5531599.jpg',
];

export const Detailed = ({navigation}) => {
  const refRBSheet = useRef();
  const openSheet = () => {
    refRBSheet.current.open();
  };
  const [iconColor, setIconColor] = useState('black');
  const handleIconClick = () => {
    setIconColor(iconColor === 'black' ? 'red' : 'black');
  };
  return (
    <View style={styles.container}>
      <SliderBox
        autoplay
        sliderBoxHeight={'101%'}
        resizeMode={'cover'}
        ImageComponentStyle={{width: '100%', marginTop: 5}}
        images={images}></SliderBox>
      <View style={styles.iconcontainer}>
        <TouchableOpacity onPress={openSheet}>
          <Icon name="upcircle" color="#1B3358" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.backiconcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="leftsquare" color="#1B3358" style={styles.backicon} />
        </TouchableOpacity>
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View>
            <View>
              <View style={styles.contentcontainer}>
                <Text
                  style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                  Sara Ali Khan
                </Text>
                <TouchableOpacity onPress={handleIconClick}>
                  <Icon
                    name="heart"
                    color={iconColor}
                    style={styles.hearticon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 17, fontSize: 15}}>Height</Text>
              <Text style={{marginLeft: 100, fontSize: 15}}>Age</Text>
              <Text style={{marginLeft: 100, fontSize: 15}}>Experience</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{marginLeft: 17, fontSize: 15, fontWeight: 'bold'}}>
                5.5(167cm)
              </Text>
              <Text style={{marginLeft: 65, fontSize: 15, fontWeight: 'bold'}}>
                22
              </Text>
              <Icon
                style={{marginLeft: 110}}
                name="star"
                fontSize={30}
                color="orange"
              />
              <Icon name="star" fontSize={30} color="orange" />
              <Icon name="star" fontSize={30} color="orange" />
              <Icon name="star" fontSize={30} color="orange" />
            </View>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.paragraph}>
              The transparent prop determines whether your modal will fill the
              entire view. Setting this to true will render the modal over a
              transparent background.
            </Text>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  iconcontainer: {
    position: 'absolute',
    right: 30,
    bottom: 40,
  },
  icon: {
    fontSize: 50,
  },
  backiconcontainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backicon: {
    fontSize: 50,
  },
  hearticon: {
    marginLeft: 150,
    fontSize: 36,
  },
  contentcontainer: {
    flexDirection: 'row',
    padding: 20,
  },
  allcontent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  description: {
    fontSize: 18,
    marginLeft: 18,
    marginTop: 10,
    fontWeight: '900',
  },
  paragraph: {
    marginLeft: 18,
    marginEnd: 18,
  },
});
