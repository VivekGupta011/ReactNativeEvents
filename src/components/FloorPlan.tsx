import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Floor from '../assets/floorPlan/FloorPlan.png';

const FloorPlan = () => {
  return (
    <View style={styles.container}>
      <Image source={Floor} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default FloorPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    // height: 100,
    // aspectRatio: 1,
  },
});
