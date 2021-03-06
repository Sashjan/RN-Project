import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return <View>
    <Text>Enter Password:</Text>
    <TextInput style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={password}
      onChangeText={(newValue) => setPassword(newValue)}
    />
    {password.length > 5 ? null : <Text>Password should be grater than 5 character</Text>}
  </View>
};

const styles = StyleSheet.create({
    input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
    }
});

export default TextScreen;