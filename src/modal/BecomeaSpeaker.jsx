import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BecomeaSpeaker = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [counts, setCounts] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);


  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  const handleIncrement = (boxId, price, fee, vat) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[boxId] || 0) + 1;
      const newTotal = totalAmount + parseFloat(price) + parseFloat(fee) + parseFloat(vat);
      setTotalAmount(newTotal); // Update the total amount
      return {
        ...prevCounts,
        [boxId]: newCount,
      };
    });
  };
  
  const handleDecrement = (boxId, price, fee, vat) => {
    setCounts((prevCounts) => {
      const newCount = Math.max(0, (prevCounts[boxId] || 0) - 1);
  
      // Ensure totalAmount doesn't go below 0
      const amountToSubtract = parseFloat(price) + parseFloat(fee) + parseFloat(vat);
      const newTotal = Math.max(0, totalAmount - amountToSubtract);
  
      setTotalAmount(newTotal); // Update the total amount
      return {
        ...prevCounts,
        [boxId]: newCount,
      };
    });
  };
  


  const renderBox = (boxId, title, price, fee, vat) => (
    <View style={styles.horizontalLineBox}>
      <Text style={styles.lineText}>{title}</Text>
      <View style={styles.horizontalLine} />
      <Text style={styles.additionalText}>
        <Text style={styles.boldPrice}>£{price}</Text> +£{fee} fee / +£{vat} VAT
      </Text>
      <Text style={[styles.additionalText, { fontWeight: 'bold' }]}>
        Sale end on 2 October 2024
      </Text>

      <View style={[styles.buttonContainer, { justifyContent: 'flex-start' }]}>
        <TouchableOpacity onPress={() => handleDecrement(boxId, price, fee, vat)} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{counts[boxId] || 0}</Text>
        <TouchableOpacity onPress={() => handleIncrement(boxId, price, fee, vat)} style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={[styles.buttonText, { color: 'white' }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  const handleCheckout = () => {
    // Your checkout logic here (e.g., navigate to payment screen)
    console.log('Proceeding to checkout');
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <KeyboardAvoidingView style={styles.modalContainer} behavior="padding">
        <View style={styles.modalContent}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>Become a Speaker</Text>
              <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
                <AntDesign name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />

            <Text style={[styles.subheading, { fontWeight: 'bold' }]}>Isle of Man - Villa marina</Text>
            <View style={styles.iconWithTextRow}>
              <View style={styles.iconWithTextContainer}>
                <Icon name="alarm" size={16} color="black" style={styles.icon} />
                <Text style={styles.timeText}>10:00 AM - 5:00 pm</Text>
              </View>
              <View style={[styles.iconWithTextContainer, { marginLeft: 10 }]}>
                <Icon name="calendar-today" size={16} color="black" style={styles.icon} />
                <Text style={styles.dateText}>02 Oct 2024</Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder="Promo Code*"
                placeholderTextColor="lightgrey"
                value={name}
                onChangeText={setName}
              />
              <Text style={styles.redText}>Apply</Text> {/* Red colored text */}
            </View>

            {renderBox('box1', 'B2B growth Expo Isle of Man - Speaker Pass ', '300.00', '21.44', '64.29')}
            {/* Add additional renderBox calls here */}
          </ScrollView>

          {/* Checkout Button */}
          <View style={styles.checkoutButtonContainer}>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Checkout</Text>
                <Text style={styles.checkoutAmount}>£{totalAmount.toFixed(2)}</Text> {/* Displays the total amount */}
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
    color: 'black',
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: 500,
  },
  iconWithTextRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 3,
  },
  timeText: {
    fontSize: 12,
    color: '#555',
  },
  dateText: {
    fontSize: 12,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',  // Ensures the "Apply" text is positioned relative to the container
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    paddingRight: 50, // Make room for "Apply" text inside the box
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  redText: {
    position: 'absolute', // Positioning the "Apply" text inside the container
    right: 15, // Align it to the right side
    color: 'red',
    fontSize: 16,
  },
  horizontalLineBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  paragraphText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 10,
  },
  lineText: {
    fontSize: 18,
    padding: 5,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D1D1D1',
    marginVertical: 10,
  },
  boldPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  additionalText: {
    fontSize: 15,
    color: '#333',
    marginTop: 5,
    marginLeft: 8,
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  button: {
    padding: 1,
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 300,
  },
  countText: {
    fontSize: 18,
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#1f1f54',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'left', // Align text to the left
},

  submitButtonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  checkoutButtonContainer: {
    marginVertical: 20, // Adjust spacing as needed
    alignItems: 'center',
    width: '100%',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black', // Dark blue color for the button
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  checkoutAmount: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BecomeaSpeaker;
