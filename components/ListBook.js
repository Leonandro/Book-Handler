import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, 
        View,
        StyleSheet,
        TouchableOpacity,
        Alert 
        } from 'react-native';

const ListBook = ({book, deleteBook}) => {
  //const [count, setCount] = useState(0);


  const showBookPrice = () =>
    Alert.alert(
      book.title,
      "Preço: " + book.price.toString(),
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
          <TouchableOpacity style = {styles.container} onPress={showBookPrice}>
            <Text style = {styles.book}>
                {book.title}
            </Text>

            <Icon
                name="trash"
                size={18}
                color="firebrick"
                onPress={() => deleteBook(book.title)}
            />
          </TouchableOpacity>
      
  );
};


const styles = StyleSheet.create({
      container: {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        marginBottom: 5
      },
      book: {
          fontSize: 18,
          color: 'blue'
      }
})

export default ListBook;
