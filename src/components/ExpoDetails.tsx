import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CommonButton from '../components/CommonButton';

import ExhibitorsIcon from '../assets/icons/Exhibitors';
import Speakers from '../assets/icons/Speakers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloorPlanIcon from '../assets/icons/FloorPlanIcon';
import Exhibitors from '../assets/icons/Exhibitors';
import AgendaIcon from '../assets/icons/AgendaIcon';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or FontAwesome, Ionicons, etc.
import homeImg from '../assets/Images/HomeImg.png';
const ExpoDetails = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const navigationHandler = (title: any) => {
    navigation.navigate(title);
    // navigation.navigate('Speakers');
  };

  return (
    <ScrollView style={styles.container}>

      {/* Event Card */}
      <View style={styles.eventCard}>
        <View style={styles.imageContainer}>
          <Image source={homeImg} style={styles.eventImage} />
 {/* Top Left 'I' Icon with Transparent Background */}
 <View style={styles.topLeftIcon}>
      <Icon name="info" size={24} color="white" /> {/* Transparent background for icon container */}
    </View>
          {/* Icon and Text Overlay */}
          <View style={styles.iconWithTextRow}>
            {/* Single Line Text */}
            <Text style={styles.singleLineText}>Isle of Man</Text>

            {/* Time and Date in Row */}
            <View style={styles.row2}>
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

          {/* Yellow Circle with Text */}
          <View style={styles.circle}>
            <Text style={styles.numberText}>46</Text>
            <Text style={styles.labelText}>days left</Text>
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

      <View style={styles.expoCard}>
        <TouchableOpacity
          onPress={() => navigationHandler('Exhibitors')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <ExhibitorsIcon width={70} />
            <Text style={styles.leftText}>Exhibitors</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={15} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Speakers')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <Speakers width={70} />
            <Text style={styles.leftText}>Speakers</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={15} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Agenda')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <AgendaIcon width={70} />
            <Text style={styles.leftText}>Agenda</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={15} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('FloorPlan')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <FloorPlanIcon width={70} />
            <Text style={styles.leftText}>Floor Plan</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={15} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Sponsor')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <Exhibitors width={70} />
            <Text style={styles.leftText}>Sponsor</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={15} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

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
  topLeftIcon: {
    position: 'absolute', // Position icon in the top-left corner
    top: 10, // Distance from the top
    left: 10, // Distance from the left
    zIndex: 1, // Ensure the icon is on top of other elements
    backgroundColor: 'transparent', // Make the background of the container transparent
  },
  iconStyle: {
    backgroundColor: 'transparent', // Set icon background to transparent
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
  row2: {
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
  timeText: {
    fontSize: 12,
    color: 'white',
  },
  dateText: {
    fontSize: 12,
    color: 'white',
  },
  circle: {
    width: 40, // Diameter of the circle
    height: 40,
    borderRadius: 30, // Half of width/height for a perfect circle
    backgroundColor: '#FFB301', // Circle color
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    position: 'absolute', // Position relative to parent
    top: 10, // Adjust as needed
    right: 10, // Adjust as needed
  },
  circleText: {
    textAlign: 'center', // Center multi-line text
    fontSize: 12, // Base font size
    color: 'black', // Text color
  },
  numberText: {
    fontSize: 12, // Larger size for the number
    fontWeight: 'bold', // Emphasize the number
    color: 'black',
  },
  labelText: {
    fontSize: 6, // Smaller size for the label
    color: 'black',
  },
  expoCard: {
    marginTop: 10,
    height: '100%',
    padding: 15,
    marginBottom: 90,
    backgroundColor: 'rgb(243,243,243)',
    borderRadius: 25,
    shadowColor: '#000',
  },
  countDown: {
    margin: 15,
    padding: 3,
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
  eventDate: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
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
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'clack',
  },
  divider: {
    height: '60%',  // Control the height of the vertical divider
    width: 1,
    backgroundColor: '#ccc',  // Light gray line
    marginHorizontal: 10, // Space between divider and stat items
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
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  smallEventCard: {
    alignItems: 'center',
    width: 150,
    marginRight: 10,
  },
  smallEventImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  eventLocation: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 18,
    marginBottom: 18,
    padding: 14,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ExpoDetails;
