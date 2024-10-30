import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import profileImg1 from '../assets/speakers/Forbes-03-1-420x420.png';
import profileImg2 from '../assets/speakers/profileImg.png';
import profileImg3 from '../assets/speakers/profileImg1.png';
import CommonButton from './CommonButton';

const Speakers = () => {
  const profiles = [
    {
      name: 'Santosh Kumar',
      title: '[Global CEO]',
      organization: 'B2B Growth Hub',
      image:profileImg1,
    },
    {
      name: 'Abhishek Tripathi',
      title: '[Director- Abiflo; B2Bgrowthhub-Bham Vice-Chair- EICBI.org]',
      organization: 'B2B Growth Hub',
      image:profileImg2,
    },
    {
      name: 'Des O’Connor',
      title: '[AI Consultant]',
      organization: 'DesOConnor.ai',
      image:profileImg3,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text className="text-6xl font-bold text-lightGray uppercase">
          SPEAKERS
        </Text>
        <Text className="-mt-[19px] uppercase w-full text-center text-sm">
          WHO’S SPEAKING?
        </Text>
      </View>

      {/* Buttons */}
      <View className="flex-1 justify-center items-center">
        <CommonButton
          title="Register Speaker Interest"
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
        <Text
          style={styles.upcomingDescription}
          className="text-black text-center">
          Unlock your potential and embrace new horizons as our visionary
          keynote speakers ignite the flames of inspiration within you!
        </Text>
      </View>

      {/* Profiles */}
      <View style={styles.profileContainer}>
        {profiles &&
          profiles.map((profile, index) => (
            <View key={index} style={styles.profileCard}>
              <Image
                source={profile.image}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileTitle}>{profile.title}</Text>
                <Text style={styles.profileOrganization}>
                  {profile.organization}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Speakers;

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
    padding: 35,
    // marginBottom: 20,
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    // marginBottom: 15,
    backgroundColor: '#fff',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#ddd',
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  profileContainer: {
    paddingHorizontal: 20,
    // marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 600,
    color: '#000',
  },
  profileTitle: {
    fontSize: 14,
    color: '#666',
  },
  profileOrganization: {
    fontSize: 15,
    color: '#000',
    fontWeight: 600,
  },
});
