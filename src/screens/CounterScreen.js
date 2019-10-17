import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  

  return <View>
    <Button title='Increase' onPress={() =>{
        //don't do this counter++, don't change the state
        // of the variable directly because it is wrong approach 
        // and will not work!
      counter++;
    }} />
    <Button title='Decrease' onPress={() => {
        //don't do this counter--, don't change the state
        // of the variable directly because it is wrong approach 
        // and will not work!
      counter--;  
    }} />
    <Text>Counter: {counter}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;