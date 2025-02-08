import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DownloadPack = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  // State to store input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  // Expose open and close functions to the parent component
  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  // Handle submit action
  const handleSubmit = () => {
    console.log("{name, email, phone, company}");
    console.log({name, email, phone, company});
    setVisible(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <KeyboardAvoidingView style={styles.modalContainer} behavior="padding">
        <View style={styles.modalContent}>
          {/* Header with Title and Close Icon */}
          <View style={styles.header}>
            <Text style={styles.title}>Download Exhibitor Pack</Text>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}>
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>

          {/* Horizontal Line */}
          <View style={styles.horizontalLine} />

          {/* Subheading */}
          <Text style={styles.subheading}>
            Fill the form to download Exhibitor Guide
          </Text>

          {/* Input Fields */}
          <TextInput
            style={styles.input}
            placeholder="Your Name*"
            placeholderTextColor="lightgrey"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email*"
            placeholderTextColor="lightgrey"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Your Phone*"
            placeholderTextColor="lightgrey"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Company Name*"
            placeholderTextColor="lightgrey"
            value={company}
            onChangeText={setCompany}
          />

          {/* Absolute positioning for the Submit Button */}
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit & Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  subheading: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 500,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#1f1f54', // Dark blue color similar to the image
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButtonContainer: {
    position: 'absolute', 
    bottom: 30, 
    left: 20, 
    right: 20,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D1D1D1',
    marginVertical: 10,
  },
});

export default DownloadPack;
