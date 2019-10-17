<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> 93ff0b5bae1b06013467b62eb664c0bfe0661dcc
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  

  return <View>
    <Button title='Increase' onPress={() =>{
<<<<<<< HEAD
        //don't do this counter++, don't change the state
        // of the variable directly because it is wrong approach 
        // and will not work!
      counter++;
    }} />
    <Button title='Decrease' onPress={() => {
        //don't do this counter--, don't change the state
        // of the variable directly because it is wrong approach 
        // and will not work!
=======
      counter++;
    }} />
    <Button title='Decrease' onPress={() => {
>>>>>>> 93ff0b5bae1b06013467b62eb664c0bfe0661dcc
      counter--;  
    }} />
    <Text>Counter: {counter}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;