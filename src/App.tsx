import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from '../src/screens/HomeScreen.tsx';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default App;