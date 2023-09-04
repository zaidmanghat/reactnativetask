import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import Modal from 'react-native-modal';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/AntDesign';

export const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const togglemodal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startbtn} onPress={togglemodal}>
        <Text style={styles.text}>click to Log in</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View>
          <Icon
            name="close"
            color="black"
            fontSize={120}
            style={styles.crossicon}
            onPress={togglemodal}
          />
          <Image
            source={require('../drawable/foot.png')}
            style={styles.footimage}
          />
          <PhoneInput
            textProps={{
              placeholder: 'Phone number',
            }}
            style={styles.phoneinput}
          />
          <View style={styles.continuebutton}>
            <Button title="Continue with Mobile Number" />
          </View>
          <Text numberOfLines={1} style={{fontSize: 15, marginTop: 10}}>
            --------------------------------- Or
            ---------------------------------
          </Text>
          <TouchableOpacity>
            <View style={styles.googlecontainer}>
              <Icon
                source={require('../drawable/google.png')}
                style={styles.googleicon}
              />
              <Text style={{marginLeft: 40, marginTop: 10}}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.facebookcontainer}>
              <Icon
                source={require('../drawable/facebook.png')}
                style={styles.facebookicon}
              />
              <Text style={{marginLeft: 40, marginTop: 10}}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.emailcontainer}>
              <Icon
                source={require('../drawable/email.png')}
                style={styles.emailicon}
              />
              <Text style={{marginLeft: 40, marginTop: 10}}>
                Continue with Email
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.content}>
            <Text>
              By continuing you agree to our {'\n'} Terms of Service & Privacy
              Policy
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B3358',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#1B3358',
  },
  modal: {
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  crossicon: {
    left: 305,
    bottom: 20,
  },
  footimage: {
    width: 150,
    height: 150,
    marginLeft: 70,
    bottom: 30,
  },
  phoneinput: {
    borderBottomWidth: 1,
    height: 30,
    width: 300,
  },
  continuebutton: {
    marginTop: 10,
    width: 'auto',
  },
  googleicon: {
    width: 40,
    height: 40,
  },
  googlecontainer: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
  },
  facebookcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
  },
  facebookicon: {
    width: 40,
    height: 40,
  },
  emailcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
  },
  emailicon: {
    width: 40,
    height: 40,
  },
  content: {
    marginTop: 270,
    alignItems: 'center',
  },
});
