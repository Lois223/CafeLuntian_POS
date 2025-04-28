import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ReportHeader from '../components/ReportHeader.tsx';
import StatsCards from '../components/StatsCards.tsx';
// import RecentOrder from '../components/RecentOrder.tsx';
// import ProductPerformance from '../components/ProductPerformance.tsx';
// import TopSellingTable from '../components/TopSellingTable.tsx';
// import InventoryTable from '../components/InventoryTable.tsx';

const ReportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ReportHeader />

      <View style={styles.rowContainer}>
        <View style={styles.leftSection}>
          <StatsCards />
        </View>
        <View style={styles.rightSection}>
          {/* <RecentOrder /> */}
        </View>
      </View>

      <View style={styles.rowContainer}>
        {/* <ProductPerformance />
        <TopSellingTable /> */}
      </View>
      {/* <InventoryTable /> */}
    </ScrollView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFDF3',
  },

  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },

  leftSection: {
    flex: 1,
    paddingRight: 20,
  },

  rightSection: {
    flex: 1,
    paddingLeft: 20,
  },
});
