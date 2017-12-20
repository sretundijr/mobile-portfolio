import React from 'react';
import {
  Button,
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

  state = {
    results: null,
  }

  handleTechAssistEvent = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.technician-assist.com/');
    this.setState({ result });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.header}>Projects</Text>
            <View style={styles.projectContainer} >
              <Text style={styles.content}>Technician Assist</Text>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require('../assets/images/technician.png')} />
              </View>
              <Text style={styles.content}>
                Technician Assist is an automotive service department tool designed to increase the customer experience through accurate diagnostics and repairs. Technician Assist gets the service experience started right by initiating communication between the customer, the advisor and the technician before the customers appointment. The app is a survey system that allows the customer to answer a series of questions designed to gather more information about the issues the customer is experiencing.
              </Text>
              <Button
                title='View Technician Assist'
                onPress={this.handleTechAssistEvent}
              />
            </View>
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
    marginBottom: 200,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
  },
  projectContainer: {
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    width: 300,
    height: 225,
  }
});
