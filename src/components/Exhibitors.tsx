import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CommonButton from './CommonButton';
import gmcFinance from '../assets/logo/gmc-finance.png';
import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.png';
import logo3 from '../assets/logo/logo3.png';
import logo4 from '../assets/logo/logo4.png';

const Exhibitors = () => {
  const allLogos = [gmcFinance, logo1, logo2, logo3, logo4];

  // Generate an array of 21 logos in a random order
  const logos = Array.from({ length: 21 }, () => allLogos[Math.floor(Math.random() * allLogos.length)]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text className="text-6xl font-bold text-lightGray uppercase">
          EXHIBITORS
        </Text>
        <Text className="-mt-[19px] uppercase w-full text-center text-sm">
          OUR RECENTLY ONBOARDED EXHIBITORS
        </Text>
      </View>

      {/* Buttons */}
      <View className="flex-1 justify-center items-center">
        <CommonButton
          title="Download Exhibitor Pack"
          onPress={() => {}}
          width="w-3/5"
          variant="alternative"
          textColor="text-white"
          bgColor="bg-CustomRed"
          borderColor="border-black"
        />
      </View>

      {/* Description */}
      <View style={styles.upcomingShows}>
        <Text style={styles.upcomingDescription} className="text-black text-center">
          Discover boundless growth and success at The B2B Growth Expo! Our
          platform empowers you with resources and insights to stand out in a
          vibrant marketplace, fostering strategic alliances and catalyzing
          business expansion. Embark on this transformative journey by
          contacting our dedicated event team. Join us in this extraordinary
          expedition of growth, innovation, and prosperity, and be a part of
          your business’s triumphant success story.
        </Text>
      </View>

      {/* Logos Grid */}
      <View style={styles.logoGrid}>
        {logos.map((logo, index) => (
          <View key={index} style={styles.logoContainer}>
            <Image source={logo} style={styles.logoImage} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Exhibitors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 15,
  },
  upcomingShows: {
    padding: 30,
    marginBottom:0,
  },
  upcomingDescription: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  logoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 50, 
  },
  logoContainer: {
    width: '30%', // Adjusts each logo to take up 1/3 of the row with some spacing
    padding: 15,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoImage: {
    width: 90,
    height: 80,
    resizeMode: 'contain',
  },
});
