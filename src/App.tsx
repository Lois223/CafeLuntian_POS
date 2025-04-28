import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from '../src/screens/HomeScreen.tsx';
<<<<<<< HEAD
import ReportScreen from '../src/screens/ReportScreen.tsx';
=======
>>>>>>> 69956b9fe80bf0150b571a024aabb607d35ccf34

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
<<<<<<< HEAD
      {/* <ReportScreen /> */}
=======
>>>>>>> 69956b9fe80bf0150b571a024aabb607d35ccf34
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