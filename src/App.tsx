import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from '../src/screens/HomeScreen.tsx';
import ReportScreen from '../src/screens/ReportScreen.tsx';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      {/* <ReportScreen /> */}
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