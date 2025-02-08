import React, { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import gmcFinance from '../assets/logo/gmc-finance.png';
import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.png';
import logo3 from '../assets/logo/logo3.png';
import logo4 from '../assets/logo/logo4.png';
import CommonButton from './CommonButton';
import BecomeaSponsor from '../modal/BecomeaSponsor';

const Sponsor = () => {
  const modal3 = useRef(null);

  const openModal3 = () => {
    if (modal3.current) {
      modal3.current.open();
    }
  };

  const sponsorModifiedData = [
    {
      SponsorName: 'Lead Sponsors',
      logos: [logo1, gmcFinance, logo2, logo3, logo4, gmcFinance],
    },
    {
      SponsorName: 'Gold Sponsors',
      logos: [gmcFinance, logo1, logo4, logo2, logo3, gmcFinance],
    },
    {
      SponsorName: 'Silver Sponsors',
      logos: [logo4, logo3, logo1, gmcFinance, logo2, gmcFinance],
    },
    {
      SponsorName: 'Silver Sponsors',
      logos: [logo3, logo2, logo1, gmcFinance, logo4, gmcFinance],
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <BecomeaSponsor ref={modal3} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SPONSORS</Text>
        <Text style={styles.subHeaderText}>
          MEET OUR OFFICIAL SPONSORS & PARTNERS
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <CommonButton
          title="Become a Sponsor"
          onPress={openModal3}
          width="w-3/5"
          variant="alternative"
          textColor="text-white"
          bgColor="bg-[#0D1335]"
          borderColor="border-black"
        />
      </View>

      {/* Description */}
      <View style={styles.upcomingShows}>
        <Text style={styles.upcomingDescription}>
          As we celebrate collaboration, growth, and progress, let us raise a
          toast to these remarkable companies whose commitment to excellence has
          made the B2B Growth Expo an extraordinary success. Keynote speakers
          ignite the flames of inspiration within you!
        </Text>
      </View>

      {/* Horizontal Scroll Bar for Sponsor Logos */}
      {sponsorModifiedData.map((Sponsor, idx) => (
        <View key={idx} style={styles.sponsorSection}>
          <View style={styles.sponsorHeader}>
            <Text style={styles.sponsorTitle}>{Sponsor.SponsorName}</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.logoScrollContainer}
            style={styles.logoScroll}>
            {Sponsor.logos.map((logo, index) => (
              <View key={index} style={styles.logoContainer}>
                <Image source={logo} style={styles.logoImage} />
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

export default Sponsor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20, // Added padding for better scroll behavior
  },
  header: {
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B0B0B0',
    textTransform: 'uppercase',
  },
  subHeaderText: {
    marginTop: -5,
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15, // Adjusted margin for spacing
  },
  upcomingShows: {
    padding: 25,
  },
  upcomingDescription: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  sponsorSection: {
    marginVertical: 10, // Added margin for separation
  },
  logoScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 140,
    height: 80,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  sponsorHeader: {
    paddingHorizontal: 20,
  },
  sponsorTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  logoScroll: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
