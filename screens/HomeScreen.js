import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.header}>Steve Retundi Jr.</Text>
            <Text style={styles.content}>
              I am a Full Stack JavaScript Developer living in the Denver Area. I enjoy writing business logic and building tools that solve the day to day issues companies of different backgrounds may face. I am currently in the market for a junior developer position as a front end developer or as a full stack JavaScript developer. I am very proficient with React, Html, Css, JavaScript, Express, Node and Mongo. My current projects can be found below that showcase these proficiencies.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../assets/images/steve.jpg')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    width: 150,
    height: 225,
  }
});
