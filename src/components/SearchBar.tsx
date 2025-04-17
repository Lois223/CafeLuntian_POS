import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = () =>  {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={require('../img/search.png')} 
        style={styles.search}
      />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#13602A',
    marginVertical: 10,
    marginLeft: 25,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 690,
  },

  search: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 2,
    resizeMode: 'contain',
  },

  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#13602A',
  },
});

export default SearchBar;