import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View,
        StyleSheet,
        TouchableOpacity,
        Text,
        FlatList,
        Alert,
        Dimensions,
        TextInput,
        Button
      } from 'react-native';
import Header from './components/Header';
import ListBook from './components/ListBook';
import AddForm from './components/AddForm';





function App (){
  const [books, setBooks] = useState([
      {title: 'Midnight Sun', price: 35},
      {title: 'Perdida 6', price: 50}
  ]);

  const [formVisibility, setFormVisibility] = useState(false);

  const [titleToBeAdded, setTitleToBeAdded] = useState('');

  const onChange = textValue => setTitleToBeAdded(textValue);

  const [priceToBeAdded, setPriceToBeAdded] = useState(0);

  const onNumericChange = numericValue => setPriceToBeAdded(numericValue);


  const openModal = () =>{
    setFormVisibility(true);
  };

  const closeModal = () =>{
    setFormVisibility(false);
  };


  const deleteBook= title => {
    setBooks(prevItems => {
      return prevItems.filter(book => book.title !== title);
    });
  };

  const addBook = (ntitle, nprice) => {
    if (!ntitle) {
      Alert.alert(
        'No Book entered',
        'Please enter a Book',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setBooks(prevItems => {
        return [{title: ntitle, price: nprice}, ...prevItems];
      });
    }
  }

  const addForm = () => {
    setFormVisibility(!formVisibility);
  }


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
      <AddForm addForm={addForm}/>
      <Modal 
        animationIn='slideInUp' 
        animationOut='slideOutDown'
        onBackdropPress={()=>closeModal()} 
        onSwipeComplete={()=>closeModal()} 
        swipeDirection='up' 
        isVisible={formVisibility} 
        style={styles.addform}
      >
        <TextInput placeholder="Digite o Livro"  onChangeText={onChange} value = {titleToBeAdded}></TextInput>
        <TextInput keyboardType='numeric' placeholder="Digite o Preço" onChangeText={onNumericChange} value = {priceToBeAdded}></TextInput>
        <Button onPress={() => addBook(titleToBeAdded, priceToBeAdded)} title="add ai">
        </Button>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listedBook: {
    padding: 15,
  },
  addform: {
    backgroundColor:'lightblue',
    maxHeight:Dimensions.get('window').height / 2
  }
})

export default App;
