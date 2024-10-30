import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CommonButton from '../components/CommonButton';
import homeImg from '../assets/Images/HomeImg.png';
import slider1 from '../assets/Images/SliderImg1.png';
import slider2 from '../assets/Images/SliderImg2.png';
import AntDesign from 'react-native-vector-icons/Fontisto';
import DownloadPack from '../modal/DownloadPack';

const HomeTabScreen = ({navigation}: any) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  const navigationHandler = () => {
    navigation.navigate('ExpoDetails');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

        {/* Pass the ref to the modal component */}
        <DownloadPack ref={modalRef} />
      </View>
      {/* Header */}
      <View style={styles.header}>
        <Text className="text-5xl font-bold text-lightGray uppercase">
          OUR B2B EXPO
        </Text>
        <Text className="-mt-5 uppercase w-full text-center text-sm">
          Isle of Man Business Expo
        </Text>
      </View>

      {/* Event Card */}
      <View style={styles.eventCard}>
        <Image source={homeImg} style={styles.eventImage} />
        {/* <Text style={styles.eventDate}>10:00AM - 5:00PM | 02 Oct 2024</Text> */}

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber} className="text-CustomRed">
              1500+
            </Text>
            <Text style={styles.statLabel}>Visitors</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber} className="text-CustomRed">
              100+
            </Text>
            <Text style={styles.statLabel}>Exhibitors</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber} className="text-CustomRed">
              20+
            </Text>
            <Text style={styles.statLabel}>Speakers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber} className="text-CustomRed">
              10+
            </Text>
            <Text style={styles.statLabel}>Workshops</Text>
          </View>
        </View>
      </View>

      <View style={styles.countDown}>
        {/* Countdown Timer */}
        <View style={styles.countdownContainer}>
          <View style={styles.countdownItem}>
            <Text style={styles.countdownNumber}>46</Text>
            <Text style={styles.countdownLabel}>Days</Text>
          </View>

          <View>
            <Text style={styles.countdownNumber} className="text-CustomRed">
              :
            </Text>
          </View>
          <View style={styles.countdownItem}>
            <Text style={styles.countdownNumber}>22</Text>
            <Text style={styles.countdownLabel}>Hours</Text>
          </View>
          <View>
            <Text style={styles.countdownNumber} className="text-CustomRed">
              :
            </Text>
          </View>
          <View style={styles.countdownItem}>
            <Text style={styles.countdownNumber}>15</Text>
            <Text style={styles.countdownLabel}>Minutes</Text>
          </View>
          <View>
            <Text style={styles.countdownNumber} className="text-CustomRed">
              :
            </Text>
          </View>
          <View style={styles.countdownItem}>
            <Text style={styles.countdownNumber}>27</Text>
            <Text style={styles.countdownLabel}>Seconds</Text>
          </View>
        </View>

        {/* Buttons */}
        <View className="flex-1 justify-center items-center">
          <View className="flex-row w-full justify-center px-4">
            <CommonButton
              title="Get a Ticket"
              onPress={() => {openModal()}}
              width="w-1/2 mx-1"
              variant="alternative"
              textColor="text-white"
              bgColor="bg-CustomBlue"
              borderColor="border-black"
            />
            <CommonButton
              title="Book A Stand"
              onPress={() => {}}
              width="w-1/2 mx-1"
              variant="alternative"
              textColor="text-white"
              bgColor="bg-CustomRed"
              borderColor="border-black"
            />
          </View>
          <CommonButton
            title="View Expo Details"
            onPress={() => {
              navigationHandler();
            }}
            width="w-11/12"
            variant="alternative"
            textColor="text-black"
            bgColor="bg-white"
            borderColor="border-black"
          />
        </View>
      </View>

      <View>
        <Text
          className=" text-lightGray uppercase"
          style={styles.upcomingHeader}>
          UPCOMING SHOWS
        </Text>
        <Text className="-mt-[28px] uppercase w-full text-center text-sm">
          All Locations
        </Text>
      </View>

      {/* Upcoming Shows */}
      <View style={styles.upcomingShows} className="mb-[10rem]">
        <Text
          style={styles.upcomingDescription}
          className="text-black text-center">
          Get in touch with potential clients, business partners, and
          like-minded business owners at your local business-to-business growth
          event.
        </Text>
        {/* Horizontal Scrollable Upcoming Shows */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.logoScrollContainer}
          style={{paddingVertical: 10, paddingLeft: 20}}>
          <View style={styles.eventRow}>
            {/* Copy of the Event Card */}
            <View style={styles.smallEventCard}>
              <Image source={slider1} style={styles.smallEventImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.eventLocation}>London</Text>
                <View className="flex flex-row items-center">
                  <View className="pr-2">
                    <AntDesign name="date" size={15} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.eventDate}>07 Nov 2024</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Second Copy of the Event Card */}
            <View style={styles.smallEventCard}>
              <Image source={slider2} style={styles.smallEventImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.eventLocation}>Manchester</Text>
                <View className="flex flex-row items-center">
                  <View className="pr-2">
                    <AntDesign name="date" size={15} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.eventDate}>08 Nov 2024</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Third Copy of the Event Card */}
            <View style={styles.smallEventCard}>
              <Image source={slider1} style={styles.smallEventImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.eventLocation}>Birmingham</Text>
                <View className="flex flex-row items-center">
                  <View className="pr-2">
                    <AntDesign name="date" size={15} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.eventDate}>09 Nov 2024</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeTabScreen;

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
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventCard: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  countDown: {
    margin: 15,
    padding: 3,
    // backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  eventDate: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  countdownItem: {
    alignItems: 'center',
  },
  countdownNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countdownLabel: {
    fontSize: 12,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  ticketButton: {
    backgroundColor: '#000080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  standButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  upcomingShows: {
    padding: 15,
    marginBottom: 60,
  },
  upcomingHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  upcomingDescription: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  eventRow: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  smallEventCard: {
    alignItems: 'center',
    width: 150,
    marginRight: 40,
    marginVertical: 5,
  },
  smallEventImage: {
    width: 180,
    height: 120,
    borderRadius: 10,
  },
  eventLocation: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 400,
    marginVertical: 5,
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: 5,
    right: 40,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  logoScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
