import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {

    return (<View style={styles.parentStyle} >
      <View style={styles.viewOneStyle} />
      {/*<View style={styles.viewTwoParent}>*/}
        <View style={styles.viewTwoStyle} />
    {/*</View>*/}
      <View style={styles.viewThreeStyle} />
      </View>
    )};

const styles = StyleSheet.create({
    parentStyle:{
      borderWidth: 3,
      borderColor: 'black',
      height: 200,
      flexDirection: 'row',
      justifyContent: 'space-between'     
    },
    /*viewTwoParent:{
      height: 100,
      justifyContent: 'flex-end'
    },*/
    viewOneStyle:{
      backgroundColor: 'purple',
      height: 100,
      width: 100
    },
    viewTwoStyle:{
        backgroundColor: 'lime',
        height: 100,
        width: 100,
        //marginTop: 100
        alignSelf: 'flex-end'
        //top: 50
    },
    viewThreeStyle:{
        backgroundColor: 'blue',
        height: 100,
        width: 100
      }
});

export default BoxScreen;