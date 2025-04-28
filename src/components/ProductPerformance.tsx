import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductPerformance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Selling Product</Text>
      <Text style={styles.placeholder}>[Bar Chart Placeholder]</Text>
    </View>
  );
};

export default ProductPerformance;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeholder: {
    textAlign: 'center',
    color: '#888',
  },
});
