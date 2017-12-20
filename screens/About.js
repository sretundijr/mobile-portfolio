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
            <Text style={styles.header}>Who Am I</Text>
            <Text style={styles.content}>
              In addition to being a passionate Developer, I love cars! Over the last several years I have had the pleasure to build several high performance cars for myself and many others. I have recently purchased quite possible the most exciting performance car platform and look forward to future track days and modifications. I also love spending time with friends and family, traveling and music from the 90’s. To learn more about me please browse my site and don’t hesitate to reach out.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../assets/images/Corvette-1165.jpg')} />
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
    width: 250,
    height: 200,
  }
});
