import React, { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import profileImg1 from '../assets/speakers/Forbes-03-1-420x420.png';
import profileImg2 from '../assets/speakers/profileImg.png';
import profileImg3 from '../assets/speakers/profileImg1.png';
import CommonButton from './CommonButton';
import BecomeaSpeaker from '../modal/BecomeaSpeaker';

const Speakers = () => {
  const modal3 = useRef(null);

  const openModal3 = () => {
    modal3.current?.open();
  };

  const profiles = [
    {
      name: 'Santosh Kumar',
      title: '[Global CEO]',
      organization: 'B2B Growth Hub',
      image: profileImg1,
    },
    {
      name: 'Abhishek Tripathi',
      title: '[Director- Abiflo; B2Bgrowthhub-Bham Vice-Chair- EICBI.org]',
      organization: 'B2B Growth Hub',
      image: profileImg2,
    },
    {
      name: 'Des O’Connor',
      title: '[AI Consultant]',
      organization: 'DesOConnor.ai',
      image: profileImg3,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* Pass the ref to the modal component */}
        <BecomeaSpeaker ref={modal3} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SPEAKERS</Text>
        <Text style={styles.subHeaderText}>WHO’S SPEAKING?</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <CommonButton
          title="Register Speaker Interest"
          onPress={openModal3}
          width="w-3/5"
          variant="alternative"
          textColor="text-white"
          bgColor="bg-CustomRed"
          borderColor="border-black"
        />
      </View>

      {/* Description */}
      <View style={styles.upcomingShows}>
        <Text style={styles.upcomingDescription}>
          Unlock your potential and embrace new horizons as our visionary
          keynote speakers ignite the flames of inspiration within you!
        </Text>
      </View>

      {/* Profiles */}
      <View style={styles.profileContainer}>
        {profiles.map((profile, index) => (
          <View key={index} style={styles.profileCard}>
            <Image source={profile.image} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileTitle}>{profile.title}</Text>
              <Text style={styles.profileOrganization}>{profile.organization}</Text>
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
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#A9A9A9',
    textTransform: 'uppercase',
  },
  subHeaderText: {
    marginTop: -19,
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingShows: {
    padding: 35,
  },
  upcomingDescription: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  profileContainer: {
    paddingHorizontal: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    fontWeight: '600',
    color: '#000',
  },
  profileTitle: {
    fontSize: 14,
    color: '#666',
  },
  profileOrganization: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
});
