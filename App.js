import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

export default function App() {
  const [num,setNum] = useState('0');
  
  const handleDay = (day) => {
    setNum(day)
  }

  useEffect(() => {
    console.log('num', num)
  },[num])


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
        <TextInput style={styles.input} onChangeText={handleDay} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Name" style={styles.button}></Button>
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
    width: 60,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer : {
    backgroundColor: 'black',
    borderRadius: '25px',
  },
  button: {
    color: 'white'
  }
});
