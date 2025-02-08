import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Linking,
    ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BecomeaSponsor = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);

    // State to store input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [referrerName, setReferrerName] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionSelect = (option) => {
        setReferrerName(option);
        setDropdownVisible(false);
    };


    // State for Exhibiting checkbox
    const [isExhibitingYes, setIsExhibitingYes] = useState(false);
    const [isExhibitingNo, setIsExhibitingNo] = useState(false);

    // State for DigitalOfferings checkbox
    const [isDigitalOfferingsYes, setIsDigitalOfferingsYes] = useState(false);
    const [isDigitalOfferingsNo, setIsDigitalOfferingsNo] = useState(false);
    const [isDigitalOfferingsMaybe, setIsDigitalOfferingsMaybe] = useState(false);
    const [isDigitalOfferingsOther, setIsDigitalOfferingsOther] = useState(false);
    const [selectedDigitalOffering, setSelectedDigitalOffering] = useState(null); // null means no option selected




    // Expose open and close functions to the parent component
    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }));

    const handleSubmit = () => {
        if (!isChecked) {
            // If the checkbox is not checked, alert the user
            alert("Please tick the checkbox to confirm you have read and understood the information.");
        } else {
            // Proceed with the form submission logic
            console.log({
                firstName,
                lastName,
                jobTitle,
                companyName,
                phoneNumber,
                mobileNumber,
                email,
                linkedIn,
            });

            setVisible(false); // Optionally close modal or perform other actions
        }
    };


    const handleLinkedInTap = () => {
        if (linkedIn) {
            const url = linkedIn.startsWith('http') ? linkedIn : `https://${linkedIn}`;
            Linking.openURL(url).catch((err) => console.error("Couldn't open URL", err));
        } else {
            console.log('No LinkedIn URL provided');
        }
    };


    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <KeyboardAvoidingView style={styles.modalContainer} behavior="padding">
                <View style={styles.modalContent}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        {/* Header with Title and Close Icon */}
                        <View style={styles.header}>
                            <Text style={styles.title}>Become a Sponsor</Text>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.closeButton}>
                                <AntDesign name="close" size={30} color="black" />
                            </TouchableOpacity>
                        </View>

                        {/* Horizontal Line */}
                        <View style={styles.horizontalLine} />

                        {/* Subheading */}
                        <Text style={styles.subheading}>Personal details</Text>

                        {/* Input Fields: First Name and Last Name Side by Side */}
                        <View style={styles.rowContainer}>
                            <TextInput
                                style={[styles.input, styles.halfInput]} // Ensure consistent styling
                                placeholder="First Name*"
                                placeholderTextColor="#757575"
                                value={firstName}
                                onChangeText={setFirstName}
                                autoCapitalize="words" // Capitalizes each word for names
                                returnKeyType="next" // Moves focus to the next input when pressing enter
                            />
                            <TextInput
                                style={[styles.input, styles.halfInput, styles.marginLeft]} // Ensure consistent styling
                                placeholder="Last Name*"
                                placeholderTextColor="#757575"
                                value={lastName}
                                onChangeText={setLastName}
                                autoCapitalize="words" // Capitalizes each word for names
                                returnKeyType="next" // Moves focus to the next input when pressing enter
                            />
                        </View>


                        {/* Other Input Fields */}
                        <TextInput
                            style={styles.input}
                            placeholder="Job Title*"
                            placeholderTextColor="#757575" // Change this color to your desired placeholder color
                            value={jobTitle}
                            onChangeText={setJobTitle}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Company Name*"
                            placeholderTextColor="#757575" // Change this color to your desired placeholder color
                            value={companyName}
                            onChangeText={setCompanyName}
                        />

                        {/* Phone Number and Mobile Number Side by Side */}
                        <View style={styles.rowContainer}>
                            <TextInput
                                style={[styles.input, styles.halfInput]}
                                placeholder="Phone Number*"
                                placeholderTextColor="#757575" // Change this color to your desired placeholder color
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                keyboardType="phone-pad"
                            />
                            <TextInput
                                style={[styles.input, styles.halfInput, styles.marginLeft]}
                                placeholder="Mobile Number*"
                                placeholderTextColor="#757575" // Change this color to your desired placeholder color
                                value={mobileNumber}
                                onChangeText={setMobileNumber}
                                keyboardType="phone-pad"
                            />
                        </View>

                        {/* Email Input Field */}
                        <TextInput
                            style={styles.input}
                            placeholder="Email*"
                            placeholderTextColor="#757575" // Change this color to your desired placeholder color
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Subheading2 */}
                        <Text style={styles.subheading2}>Linked In</Text>

                        {/* LinkedIn Profile Link Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="LinkedIn Profile URL*"
                            placeholderTextColor="#757575" // Change this color to your desired placeholder color
                            value={linkedIn}
                            onChangeText={setLinkedIn}
                            keyboardType="url"
                            onFocus={handleLinkedInTap} // Consider changing this for manual tapping
                        />

                        {/* New Subheading for Referrer */}
                        <Text style={styles.subheading2}>Referrer</Text>
                        <View style={styles.container}>
                            {/* Input with Dropdown Inside */}
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input2}
                                    placeholder="Where did you hear about the show?*"
                                    placeholderTextColor="#757575"
                                    value={referrerName}
                                    onChangeText={setReferrerName}
                                />
                                <TouchableOpacity
                                    style={styles.dropdownButton}
                                    onPress={toggleDropdown}
                                >
                                    <Text style={styles.dropdownButtonText}>▼</Text>
                                </TouchableOpacity>
                            </View>

                            {dropdownVisible && (
                                <View style={styles.dropdown}>
                                    <TouchableOpacity onPress={() => handleOptionSelect('Option 1')}>
                                        <Text style={styles.dropdownItem}>Option 1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleOptionSelect('Option 2')}>
                                        <Text style={styles.dropdownItem}>Option 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleOptionSelect('Option 3')}>
                                        <Text style={styles.dropdownItem}>Option 3</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                        {/* New Subheading for Exhibiting? */}
                        <Text style={styles.subheading2}>Exhibiting?</Text>

                        {/* Two-line Text with Smaller Font Size */}
                        <Text style={styles.exhibitingText}>
                            Would you be interested in exibiting or keynote{"\n"}speech opportunities at the show?'

                        </Text>
                        {/* Checkbox for Yes and No */}
                        <View style={styles.checkboxContainer}>
                            {/* Yes Option */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, isExhibitingYes && styles.checkboxSelected]}
                                onPress={() => {
                                    setIsExhibitingYes(true);
                                    setIsExhibitingNo(false); // Deselect 'No' if 'Yes' is selected
                                }}
                            >
                                <View style={styles.checkbox}>
                                    {isExhibitingYes && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, isExhibitingYes && styles.checkboxTextSelected]}>
                                    Yes
                                </Text>
                            </TouchableOpacity>

                            {/* No Option */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, isExhibitingNo && styles.checkboxSelected]}
                                onPress={() => {
                                    setIsExhibitingNo(true);
                                    setIsExhibitingYes(false); // Deselect 'Yes' if 'No' is selected
                                }}
                            >
                                <View style={styles.checkbox}>
                                    {isExhibitingNo && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, isExhibitingNo && styles.checkboxTextSelected]}>
                                    No
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Digital Offerings Checkbox */}
                        <Text style={styles.subheading3}>Digital offerings</Text>
                        <Text style={styles.DigitalofferingsText} numberOfLines={1}>
                            Please tick off the following free digital products you are interested in
                        </Text>

                        <View style={styles.checkboxContainer2}>
                            {/* Checkbox 1 */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, selectedDigitalOffering === 1 && styles.checkboxSelected2]}
                                onPress={() => setSelectedDigitalOffering(1)}
                            >
                                <View style={styles.checkbox2}>
                                    {selectedDigitalOffering === 1 && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, selectedDigitalOffering === 1 && styles.checkboxTextSelected2]}>
                                    Webinars & Seminars
                                </Text>
                            </TouchableOpacity>

                            {/* Checkbox 2 */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, selectedDigitalOffering === 2 && styles.checkboxSelected2]}
                                onPress={() => setSelectedDigitalOffering(2)}
                            >
                                <View style={styles.checkbox2}>
                                    {selectedDigitalOffering === 2 && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, selectedDigitalOffering === 2 && styles.checkboxTextSelected2]}>
                                    Workshops
                                </Text>
                            </TouchableOpacity>

                            {/* Checkbox 3 */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, selectedDigitalOffering === 3 && styles.checkboxSelected2]}
                                onPress={() => setSelectedDigitalOffering(3)}
                            >
                                <View style={styles.checkbox2}>
                                    {selectedDigitalOffering === 3 && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, selectedDigitalOffering === 3 && styles.checkboxTextSelected2]}>
                                    E-magazine
                                </Text>
                            </TouchableOpacity>

                            {/* Checkbox 4 */}
                            <TouchableOpacity
                                style={[styles.checkboxWrapper, selectedDigitalOffering === 4 && styles.checkboxSelected2]}
                                onPress={() => setSelectedDigitalOffering(4)}
                            >
                                <View style={styles.checkbox2}>
                                    {selectedDigitalOffering === 4 && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={[styles.checkboxText, selectedDigitalOffering === 4 && styles.checkboxTextSelected2]}>
                                    Newsletter
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Text that fits full screen */}
                        <View style={styles.fullScreenTextContainer}>
                            <Text style={styles.exhibitingText}>
                                By clicking on Register button you submit the registration form for your interest in sponsorship at the show and you consent to the event organiser sending you emails regarding this event
                            </Text>
                        </View>

                        {/* Square Checkbox with Text beside it */}
                        <View style={styles.checkboxBelowTextContainer}>
                            <TouchableOpacity
                                style={[styles.squareCheckbox, isChecked && styles.squareCheckboxSelected]}
                                onPress={() => setIsChecked((prev) => !prev)} // Toggle checkbox state
                            >
                                {isChecked && <View style={styles.squareCheckboxInner} />}
                            </TouchableOpacity>
                            {/* Text beside the checkbox */}
                            <Text style={styles.checkboxText3}>Please tick here to indicate you have read and understood this</Text>
                        </View>

                        {/* Text that fits full screen */}
                        <View style={styles.fullScreenTextContainer}>
                            <Text style={styles.exhibitingText2}>
                                By clicking on Register button below,you consent to allow The B2B Growth Expo show to store and process the personal information submitted above to provided
                                you the content requested.
                            </Text>
                        </View>

                        {/* Submit Button */}
                        <View style={styles.submitButtonContainer}>
                            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Register as Sponsor</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
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
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#D1D1D1',
        marginVertical: 10,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1,
    },
    closeButton: {
        position: 'absolute',
        right: 0,
    },
    subheading: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    subheading2: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    fullScreenTextContainer: {
        width: '105%', // Make the container span the full width of the screen
        paddingHorizontal: 0, // Add some padding for better readability
        justifyContent: 'center', // Center content vertically if needed
    },
    exhibitingText: {
        fontSize: 11, // smaller text size
        color: 'grey', // color can be customized
        textAlign: 'left',
        marginBottom: 10, // adds space below the text
        lineHeight: 18, // controls line height for two lines of text
    },
    exhibitingText2: {
        fontSize: 11, // smaller text size
        color: 'grey', // color can be customized
        textAlign: 'left',
        margin: 10, // adds space below the text
        lineHeight: 18, // controls line height for two lines of text
    },
    subheading3: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginBottom: 2,
        fontWeight: 'bold',
    },
    DigitalofferingsText: {
        fontSize: 11, // smaller text size
        color: 'gray', // color can be customized
        textAlign: 'left',
        marginBottom: 2, // adds space below the text
        lineHeight: 18, // controls line height for two lines of text
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align the items to the left
        gap: 30, // Adjust space between checkboxes
        marginBottom: 20, // space after checkboxes
        alignItems: 'center',
    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center', // Align text beside checkbox
        marginRight: 20, // Optional: adds some space between checkbox options
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8, // Space between checkbox and text
    },
    checkboxInner: {
        width: 11,
        height: 11,
        borderRadius: 7,
        backgroundColor: 'lightgrey', // Inner circle color when selected
    },
    checkboxSelected: {
        borderColor: '#1f1f54', // border color when selected
    },
    checkboxText: {
        fontSize: 12,
        color: 'black',
    },
    checkboxTextSelected: {
        color: '#1f1f54', // text color when selected
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 0.4,
        borderColor: 'grey',
        borderRadius: 8,
        marginBottom: 20,
        fontSize: 12,
        backgroundColor: '#f9f9f9',
    },
    container: {
        padding: 0,
    },
    inputWrapper: {
        width: '100%',
        padding: 0,
        borderWidth: 0.4,
        borderColor: 'grey',
        borderRadius: 8,
        fontSize: 12,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row', // Aligns input and button in a row
    },
    input2: {
        flex: 1,
        padding: 10,
        fontSize: 12,
        color: '#000',
    },
    dropdownButton: {
        marginRight:30,
        paddingVertical: 6,    // Optionally adjust vertical padding
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Remove background
        borderLeftWidth: 0,    // No border
        borderColor: 'transparent', // Ensure no border color
        borderRadius: 0,       // No border radius
    },
    
    dropdownButtonText: {
        fontSize: 16,
        color: '#333',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginTop: 4,
        zIndex: 1,
    },
    dropdownItem: {
        padding: 10,
        fontSize: 16,
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    halfInput: {
        width: '46%',
    },
    marginLeft: {
        marginLeft: 10,
    },
    submitButtonContainer: {
        alignItems: 'flex-start', // Align the button to the left
        marginTop: 20,
    },

    submitButton: {
        backgroundColor: '#1f1f54',
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderRadius: 20,
    },

    submitButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkboxContainer2: {
        flexDirection: 'column', // Align checkboxes in a column
        justifyContent: 'flex-start', // Align the items to the left
        marginTop: 10, // space between text and checkboxes
        marginBottom: 20, // space after checkboxes
        alignItems: 'flex-start', // Align the checkboxes to the left
    },

    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center', // Align text beside checkbox
        marginBottom: 10, // Add space between each checkbox
    },
    checkbox2: {
        width: 22, // Width of the square checkbox
        height: 22, // Height of the square checkbox
        borderWidth: 1.5,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8, // Space between checkbox and text
    },
    checkboxSelected2: {
        borderColor: '#1f1f54', // border color when selected

    },

    checkboxTextSelected2: {
        color: '#1f1f54', // text color when selected
    },
    checkboxBelowTextContainer: {
        flexDirection: 'row', // Align elements in a row
        alignItems: 'center', // Vertically center the checkbox
        marginTop: 2, // Space between text and checkbox
    },

    squareCheckbox: {
        width: 22, // Checkbox width
        height: 22, // Checkbox height
        borderWidth: 2,
        borderColor: '#ddd',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    squareCheckboxSelected: {
        borderColor: '#1f1f54', // Border color when selected
    },

    squareCheckboxInner: {
        width: 11,
        height: 11,
        borderRadius: 7,
        backgroundColor: 'lightgrey', // Inner circle color when selected
    },
    checkboxText3: {
        marginLeft: 10, // Space between checkbox and text
        fontSize: 11, // Adjust the font size as needed
        color: 'grey', // Text color
    },





});

export default BecomeaSponsor;
