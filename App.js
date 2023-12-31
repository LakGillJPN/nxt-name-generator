import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button,  Alert, } from 'react-native';
import firstNameGen from './nameGenerator';
import lastNameGen from './lastNameGen';

export default function App() {
  const [day,setDay] = useState();
  const [month, setMonth] = useState()
  const [viewable, setViewable] = useState(false)

  const handleDay = (day) => {
    setDay(day)
  }

  const handleMonth = (month) => {
    setMonth(month)
  }

  const handlePress = () => {
    Alert.prompt('Enter your birth month', '', (monthInput) => {
      if (monthInput !== null) {
        Alert.prompt('Enter your birth day', '', (dayInput) => {
          if (dayInput !== null) {
            setMonth(monthInput);
            setDay(dayInput);
            setViewable(true);
          }
        });
      }
    });
  };


  // useEffect(() => {
  //   console.log(viewable)
  // },[viewable])


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
      <View style={styles.buttonContainer}>
        <Button title="Get Name" style={styles.button} onPress={handlePress}></Button>
      </View>

      <View>
       {viewable ? <Text style={color = 'black'}>{firstNameGen(num, 'M')} {lastNameGen(month)}</Text> : <Text></Text>}
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
