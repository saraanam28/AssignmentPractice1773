import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>
        Subscribe for App Alerts!
      </Text>
     <TextInput
        style={styles.enterEmail}
        maxLength={30}
        placeholder="Enter Email"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    
  },

  paragraph: {
    margin: 0,
    marginTop: 0,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  enterEmail: {
    fontWeight: '300',
    textAlign: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
    marginBottom: 18,
  },

  logo: {
    height: 128,
    width: 128,
  }
});
