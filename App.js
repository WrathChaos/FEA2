import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableNativeFeedback
          style={styles.buttonTouchable}
          onPress={() => {
            console.log('PROVA');
          }}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>{'Bottone di prova'}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  buttonTouchable: {
    height: 40,
    width: 200,
  },
  buttonTextContainer: {
    height: 40,
    width: 200,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
