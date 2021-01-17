import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Differense Music
      </Text>
      <Card>
        <AssetExample />
      </Card>
       <TouchableOpacity
        onPress={() => alert('Thank you, check your email')}
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FF0000',
    padding: 8,
  },
  paragraph: {
    fontFamily: 'poppins',
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
   button: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'poppins',
    fontWeight: 600,
    fontSize: 15,
    color: 'black',
    textAlign: "center",
  
  }, 
});
