import React, {useState} from 'react';
import {Text, 
        View,
        StyleSheet, 
        } from 'react-native';

function Header (){
  const [count, setCount] = useState(0);
  return (
      <View style = {styles.header}>
          <Text style = {styles.text}>
            BOOK HANDLER
          </Text>
      </View>
  );
};


const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'blue',
      },
      text: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
      },
})

export default Header;
