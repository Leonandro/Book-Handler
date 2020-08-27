import React, {useState} from 'react';
import {Text, 
        View,
        StyleSheet,
        TouchableOpacity,
        FlatList
      } from 'react-native';
import Header from './components/Header';
import ListBook from './components/ListBook';




function App (){
  const [books, setBooks] = useState([
      {title: 'Midnight Sun', price: 35},
      {title: 'Perdida 6', price: 50}
  ]);

  const deleteBook= title => {
    setBooks(prevItems => {
      return prevItems.filter(book => book.title !== title);
    });
  };


  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        style={styles.listedBook}
        data = {books}
        renderItem = { ( {item} ) => (
            <ListBook 
              style={styles.listedBook}
              book={item}
              deleteBook = {deleteBook}/>
          )
        }      
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listedBook: {
    padding: 15,
  }
})

export default App;
