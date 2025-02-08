import React, { useRef } from 'react';
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
import DownloadPack from '../modal/DownloadPack';
import DownloadPack2 from '../modal/DownloadPack2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeTabScreen = ({ navigation }: any) => {
  const modalRef = useRef(null);
  const modal2 = useRef(null);

  const openModal = () => {
    modalRef.current?.open();
  };
  const openModal2 = () => {
    modal2.current?.open();
  };

  const navigationHandler = () => {
    navigation.navigate('ExpoDetails');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

        {/* Pass the ref to the modal component */}
        <DownloadPack ref={modalRef} />
        <DownloadPack2 ref={modal2} />
      </View>
      {/* Header */}
      <View style={styles.header}>
        <Text
          className="text-5xl font-bold text-lightGray uppercase"
          style={{ fontWeight: '900' }} // Make the text extra bold
        >
          OUR B2B EXPO
        </Text>
        <Text className="-mt-5 uppercase w-full text-center text-sm">
          Isle of Man Business Expo
        </Text>
      </View>

      {/* Event Card */}
      <View style={styles.eventCard}>
        <View style={styles.imageContainer}>
          <Image source={homeImg} style={styles.eventImage} />

          {/* Icon and Text Overlay */}
          <View style={styles.iconWithTextRow}>
            {/* Single Line Text */}
            <Text style={styles.singleLineText}>Isle of Man</Text>

            {/* Time and Date in Row */}
            <View style={styles.row}>
              {/* Alarm Icon and Time */}
              <View style={styles.iconWithTextContainer}>
                <Icon name="alarm" size={14} color="white" style={styles.icon} />
                <Text style={styles.timeText}>10:00 AM - 5:00 pm</Text>
              </View>

              {/* Calendar Icon and Date */}
              <View style={[styles.iconWithTextContainer, { marginLeft: 10 }]}>
                <Icon name="calendar-today" size={14} color="white" style={styles.icon} />
                <Text style={styles.dateText}>02 Oct 2024</Text>
              </View>
            </View>
          </View>

          {/* Yellow Circle with Chevron Icon */}
          <View style={styles.circle}>
            <Icon
              name="chevron-right" // Replace with your icon library's chevron name
              size={18} // Adjust size to fit inside the circle
              color="black"
            />
          </View>


        </View>





        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber} className="text-CustomRed">
                1500+
              </Text>
              <Text style={styles.statLabel}>Visitors</Text>
            </View>
            <View style={styles.divider} /> {/* Divider between the first stat */}
            <View style={styles.statItem}>
              <Text style={styles.statNumber} className="text-CustomRed">
                100+
              </Text>
              <Text style={styles.statLabel}>Exhibitors</Text>
            </View>
            <View style={styles.divider} /> {/* Divider between the second stat */}
            <View style={styles.statItem}>
              <Text style={styles.statNumber} className="text-CustomRed">
                20+
              </Text>
              <Text style={styles.statLabel}>Speakers</Text>
            </View>
            <View style={styles.divider} /> {/* Divider between the third stat */}
            <View style={styles.statItem}>
              <Text style={styles.statNumber} className="text-CustomRed">
                10+
              </Text>
              <Text style={styles.statLabel}>Workshops</Text>
            </View>
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
              onPress={() => { openModal() }}
              width="w-1/2 mx-1"
              variant="alternative"
              textColor="text-white"
              bgColor="bg-CustomBlue"
              borderColor="border-black"
            />
            <CommonButton
              title="Book A Stand"
              onPress={() => { openModal2() }}
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
            width="w-11/12" // Adjust to 11/12 of the parent width
            variant="alternative"
            textColor="text-black"
            bgColor="bg-white"
            borderColor="border-black"
            style={styles.viewDetailsButton} // Add the updated styles
          />

        </View>
      </View>

      <View>
        <Text
          className=" text-lightGray uppercase"
          style={styles.upcomingHeader}>
          UPCOMING SHOWS
        </Text>
        <Text className="-mt-5 uppercase w-full text-center text-sm">
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
          style={{ paddingVertical: 0, paddingLeft: 0 }}>
          <View style={styles.eventRow}>
            {/* Copy of the Event Card */}
            <View style={styles.smallEventCard}>
              <Image source={slider1} style={styles.smallEventImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.eventLocation}>London</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ paddingRight: 1 }}>
                    <AntDesign name="calendar" size={15} color="#fff" />
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ paddingRight: 1 }}>
                    <AntDesign name="calendar" size={15} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.eventDate}>07 Nov 2024</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Third Copy of the Event Card */}
            <View style={styles.smallEventCard}>
              <Image source={slider1} style={styles.smallEventImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.eventLocation}>Birmingham</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ paddingRight: 1 }}>
                    <AntDesign name="calendar" size={15} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.eventDate}>07 Nov 2024</Text>
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
  statsContainer: {
    flexDirection: 'column', // Stack vertically
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 8, // Adjust this value to push it down
  },
  statRow: {
    flexDirection: 'row', // Align stats horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  eventCard: {
    margin: 15,
    padding: 8,
    backgroundColor: 'rgb(243,243,243)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 0, // Adjust this to fine-tune space below the card
  },
  imageContainer: {
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  iconWithTextRow: {
    position: 'absolute', // Position the row over the image
    bottom: 10,           // Position it at the bottom of the image
    left: 20,             // Add some left padding
    right: 0,            // Add some right padding
    flexDirection: 'column', // Align the icon and text horizontally
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Vertically center the icons and text
  },
  singleLineText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 2, // Space between the text and the time/date
    fontWeight: 'bold',
    padding: 1,
    letterSpacing: 0.5, // Adjust spacing between characters
  },

  row: {
    flexDirection: 'row', // Arrange time and date in a row
    alignItems: 'center', // Center items vertically
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -2,      // Space between the two containers
  },
  icon: {
    marginRight: 3,       // Space between the icon and the text
  },
  eventDateContainer: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center both vertically
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: translucent background for readability
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 15,
    borderRadius: 10,
  },
  eventDate: {
    fontSize: 10,
    color: 'white',
    marginLeft: 10, // Add space between the icon and text
  },
  outlinedIcon: {
    borderWidth: 1,
    borderColor: 'white', // Outline color
    borderRadius: 15,

  },
  timeText: {
    fontSize: 12,
    color: 'white',
  },
  dateText: {
    fontSize: 12,
    color: 'white',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 10, // Distance from the bottom
    right: 10, // Distance from the right
  },
  circle: {
    width: 35, // Diameter of the circle
    height: 35,
    borderRadius: 20, // Half of width/height for a perfect circle
    backgroundColor: '#FFB301', // Circle color
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    position: 'absolute', // Ensure placement at the bottom-right corner
    bottom: 10, // Adjust as needed
    right: 10, // Adjust as needed
    borderColor: '#ADAFA8',
    borderWidth: 3,
  },

  countDown: {
    margin: 1,
    padding: 5,
    // backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },


  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },

  divider: {
    height: '60%',  // Control the height of the vertical divider
    width: 1,
    backgroundColor: '#ccc',  // Light gray line
    marginHorizontal: 10, // Space between divider and stat items
  },
  statLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'clack',
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Evenly distribute items horizontally
    alignItems: 'center',          // Center items vertically within the container
    marginVertical: 13,
  },
  countdownItem: {
    alignItems: 'center',
    justifyContent: 'center',      // Center content vertically
    backgroundColor: 'rgb(243,243,243)',
    height: 45,
    width: 75,
    borderRadius: 8,
  },
  countdownNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',           // Center text horizontally
  },
  countdownLabel: {
    fontSize: 8,
    color: 'black',
    textAlign: 'center',           // Center text horizontally
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
    width: '90%',           // Increase button width (adjust as needed)
    alignSelf: 'center',    // Center the button in the parent container
    paddingVertical: 12,    // Add vertical padding for better height
    borderWidth: 3,         // Increase border width
    borderColor: '#000',    // Ensure the border color matches the design
    borderRadius: 8,        // Keep rounded corners
    backgroundColor: '#fff',// White background
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
    fontSize: 34,          // Adjust font size as needed
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,         // Add spacing from the "View Expo Details" button
    color: 'lightgrey',      // Ensure color matches the theme
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
    marginRight: 15,
    marginVertical: 1,
  },
  smallEventImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  eventLocation: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 400,
    marginVertical: 5,
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  logoScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
  },
});
