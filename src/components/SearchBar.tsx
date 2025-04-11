import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = () =>  {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="gray" />
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

  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#13602A',
  },
});

export default SearchBar;