import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, 
        View,
        StyleSheet,
        TouchableOpacity
        } from 'react-native';

const AddForm  = ({addForm}) => {
  return (
      <TouchableOpacity onPress = {addForm} style = {styles.bottom}>
          <Icon  style={styles.addBnt} name="plus-circle" size={33} color="green"/>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 36,
        marginRight: 36
    },

    addBnt: {
        position: 'absolute',
        bottom:0
    }
})

export default AddForm;
