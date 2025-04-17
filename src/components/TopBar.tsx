import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require('../img/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.date}>Monday, 30 March</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.orderText}>Total Order: <Text>20</Text></Text>

        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportText}> Report</Text>
          <Image
          source={require('../img/docu.png')} 
          style={styles.docu}
          />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Image
            source={require('../img/profile.png')} 
            style={styles.profile}
            />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.name}>Sirius Black</Text>
            <Text style={styles.role}>Admin</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 60,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain',
  },

  date: {
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: 'bold',
    color: '#13602A',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  orderText: {
    fontSize: 20,
    color: '#13602A',
    marginRight: 10,
    fontWeight: 'bold',
  },

  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1.2,
    borderColor: '#13602A',
    marginRight: 10,
  },

  reportText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13602A',
    marginRight: 6,
  },

  docu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: '#13602A',
    paddingHorizontal: 12,
    paddingVertical: 2,
  },

  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  profileText: {
    justifyContent: 'center',
  },

  profile: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#13602A',
  },

  role: {
    fontSize: 13,
    color: '#888',
  },
});

export default TopBar;
