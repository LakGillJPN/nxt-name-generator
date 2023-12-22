import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./assets/nxt_logo.png')}
          style={{ width: 120, height: 50 }}
          resizeMode='contain'>
             </Image>
      </View>
      <Text style={styles.title}>Name Generator</Text>
      <StatusBar style="auto"/>
      <View style={styles.birthday}>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  birthday: {
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
