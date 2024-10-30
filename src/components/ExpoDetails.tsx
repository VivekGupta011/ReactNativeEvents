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
import expoImage from '../assets/Images/HomeImg.png';
import ExhibitorsIcon from '../assets/icons/Exhibitors';
import Speakers from '../assets/icons/Speakers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloorPlanIcon from '../assets/icons/FloorPlanIcon';
import Exhibitors from '../assets/icons/Exhibitors';
import AgendaIcon from '../assets/icons/AgendaIcon';

const ExpoDetails = ({navigation}: any) => {
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
        <Image source={expoImage} style={styles.eventImage} />
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
      <View style={styles.expoCard}>
        <TouchableOpacity
          onPress={() => navigationHandler('Exhibitors')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <ExhibitorsIcon width={50} />
            <Text style={styles.leftText}>Exhibitors</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={30} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Speakers')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <Speakers width={50} />
            <Text style={styles.leftText}>Speakers</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={30} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Agenda')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <AgendaIcon width={50} />
            <Text style={styles.leftText}>Agenda</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={30} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('FloorPlan')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <FloorPlanIcon width={50} />
            <Text style={styles.leftText}>Floor Plan</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={30} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationHandler('Sponsor')}
          style={styles.row}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <Exhibitors width={50} />
            <Text style={styles.leftText}>Sponsor</Text>
          </View>

          {/* Right Section */}
          <View>
            <AntDesign name="right" size={30} color="#000" />
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
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  expoCard: {
    margin: 15,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
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
    color: '#666',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 18,
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
