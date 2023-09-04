import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Detailed} from '../card detail screens/detailedcard';
import {useNavigation} from '@react-navigation/native';

export const Model = () => {
  const navigation = useNavigation();

  const handleCardPRess = () => {
    navigation.navigate('Detailed');
  };

  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView>
        <View style={styles.titlecontainer}>
          <Text style={styles.apptitle}>Popular {'\n'} Models</Text>
          <Searchbar placeholder="search" style={styles.searchbar} />
        </View>
        <ScrollView style={styles.topcardcontainer} horizontal={true}>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/cd/c9/70/cdc9700cd26fcdb3db141168ae005e69.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/a5/e6/96/a5e6962e6115c4b5df7b3e1e834bebb6.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/09/65/20/09652037c6964e3809be278f56be3dab.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/07/cb/66/07cb6658ed0c1e1659a7a4b8b69934fb.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.topmodelview}>
          <Text style={styles.topmodels}>TOP MODELS</Text>
          <Text style={styles.seeall}>SEE ALL</Text>
        </View>
        <ScrollView style={styles.circularcardcontainer} horizontal={true}>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.circularcard}>
              <Card.Cover
                style={styles.cardimage}
                source={{
                  uri: 'https://i.pinimg.com/originals/91/d3/af/91d3af849600c3984af6d9c00b89cf1c.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.circularcard}>
              <Card.Cover
                style={styles.cardimage}
                source={{
                  uri: 'https://i.pinimg.com/originals/88/a4/53/88a4538b90528a3e16e8993622ad8b5e.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.circularcard}>
              <Card.Cover
                style={styles.cardimage}
                source={{
                  uri: 'https://i.pinimg.com/originals/c3/2b/dd/c32bdd8c0a9ea1d6fa436450bafe6ac8.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.circularcard}>
              <Card.Cover
                style={styles.cardimage}
                source={{
                  uri: 'https://i.pinimg.com/originals/92/b0/3b/92b03b3914c76c04fd7ad30e02d9aedd.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
        </ScrollView>
        <View>
          <Text style={styles.foryou}>For you</Text>
        </View>
        <ScrollView style={styles.cardcontainer} horizontal={true}>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/51/30/8f/51308f6c80221546ffbb41af355d8a02.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/23/f6/93/23f6930776f901335d4077a8d447380b.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/a9/11/d6/a911d6794d0533c9c7be633880ada603.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPRess}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://i.pinimg.com/originals/74/5a/00/745a00c4faea02bc1de8451c9fb8e9e7.jpg',
                }}
              />
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#1B3358',
  },
  titlecontainer: {
    flexDirection: 'row',
  },
  searchbar: {
    marginLeft: 190,
    marginTop: 40,
    backgroundColor: '#D3D3D3',
  },
  apptitle: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
  card: {
    width: 130,
    padding: 2,
    marginLeft: 20,
  },
  topcardcontainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  cardcontainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
  },
  topmodels: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
  topmodelview: {
    flexDirection: 'row',
  },
  seeall: {
    marginLeft: 175,
    marginTop: 25,
    fontSize: 16,
    color: '#D3D3D3',
  },
  circularcard: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20,
    overflow: 'hidden',
  },
  circularcardcontainer: {
    marginTop: 20,
  },
  cardimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  foryou: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
});
