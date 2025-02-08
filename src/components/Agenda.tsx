import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Agenda = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <Text className="text-6xl font-bold text-lightGray uppercase">
    SCHEDULE
  </Text>
  <Text className="-mt-[19px] uppercase w-full text-center text-sm">
    AT WHAT TIME?
  </Text>
</View>



      {/* Description */}
      <View>
        <Text style={styles.upcomingDescription} className="text-black text-center">
          Get ready to embark on a transformative journey filled with dynamic sessions,interactive
          workshops,{"\n"}and engaging discussions led by {"\n"}  industry trailblazers.
        </Text>
      </View>

      {/* Description2 */}
      <View>
        <Text style={styles.upcomingDescription2} className=" text-center">
          Isle of Man - 02 Oct 2024
        </Text>
      </View>

      {/* Description3 */}
      <View>
        <Text style={styles.upcomingDescription3} className="text-black text-bold text-center">
          Visiotor registration starts at{"\n"}10.00 am and end at 04.00 pm
        </Text>
      </View>

      {/* Description4 */}
      <View>
        <Text style={styles.upcomingDescription4} className="text-black text-bold text-center">
          07.00 am<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - </Text>
        </Text>
      </View>

     {/* Elevated Card */}
    <View style={styles.elevatedCard}>
     <Text style={styles.cardText}>
      Exhbitor setup {"\n"}
     <Text style={styles.timingText}>{"\n"} 07.00 am to 09.00 am{"\n"} </Text>
     <Text style={styles.briefText}> {"\n"}{"Embark on your brand's journey at B2B Growth Expo.Transform your space into visual marvel,setting the stage for connections,innovation,and growth."}
      </Text>
     </Text>
    </View>
     {/* Description5 */}
      <View>
        <Text style={styles.upcomingDescription5} className="text-black text-bold text-center">
          09.00 am<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - </Text>
        </Text>
      </View>


      {/* Elevated Card2 */}
    <View style={styles.elevatedCard2}>
     <Text style={styles.cardText}>
      VIP & exhbitor setup {"\n"}
     <Text style={styles.timingText2}>{"\n"} 09.00 am to 10.00 am{"\n"} </Text>
     <Text style={styles.briefText2}> {"\n"}{"Forge powerfull connections among industry leaders and exibitors in an exclusive networking sessions that sets the stage for meaningful collaborations."}
      </Text>
     </Text>
    </View>

    {/* Description6 */}
    <View>
        <Text style={styles.upcomingDescription6} className="text-black  text-center">
          10.00 am<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - </Text>
        </Text>
      </View>
      {/* Combined Elevated Card for 3 and 4 */}
<View style={styles.combinedCard}>
  <Text style={styles.cardText}>
    Show opening by Lord Mayor  {"\n"}
    <Text style={styles.timingText}>
      {"\n"} 10.00 am to 10.15 am{"\n"}
    </Text>
    <Text style={styles.briefText}>
      {"\n"}
      Embark on a journey of innovation as the esteemed Lord Mayor inaugurates
      the expo, signaling the commencement of a day brimming with possibilities.{"\n"}
      {"\n"}
      <Text style={{ fontWeight: 'bold', fontSize:14}}>Registration Starts for Visitors</Text>{"\n"}
      {"\n"}
      <Text style={{ fontWeight: '500',fontSize:10 }}>10.00 am to 04.30 pm</Text>{"\n"}
      {"\n"}
      The doors swing open for eager attendees to register, marking the
      beginning of a day dedicated to exploring transformative business
      opportunities.
    </Text>
  </Text>
</View>

    {/* Description7 */}
    <View>
        <Text style={styles.upcomingDescription7} className="text-black  text-center">
          12.00 am<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - </Text>
        </Text>
      </View>
      {/* Elevated Card5 */}
    <View style={styles.elevatedCard5}>
     <Text style={styles.cardText}>
      Speed networking {"\n"}
     <Text style={styles.timingText5}>{"\n"} 12.00 am to 12.30 PM{"\n"} </Text>
     <Text style={styles.briefText5}> {"\n"}{"Ignite conversations and spark partnerships in rapid-fire interactions that maximize networking potential and cultivate valuable relationships."}{"\n"}
      </Text>
     </Text>
    </View>
     {/* Description8 */}
    <View>
        <Text style={styles.upcomingDescription8} className="text-black  text-center">
          12.30 pm <Text style={{ color: 'grey', fontSize: 12}}>  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        </Text>
      </View>
      {/* Elevated Card6 */}
    <View style={styles.elevatedCard6}>
     <Text style={styles.cardText}>
      Exibitor'slunch time {"\n"}
     <Text style={styles.timingText6}>{"\n"} 12.30 pm to 01.30 PM{"\n"} </Text>
     <Text style={styles.briefText6}> {"\n"}{"A movement of rejuvenation for exibitors to recharge over a sumotuous lunch,fortiying themself for busting afternoon ahead."}{"\n"}
      </Text>
     </Text>
    </View>
    {/* Description9 */}
    <View>
        <Text style={styles.upcomingDescription9} className="text-black  text-center">
          01.30 pm<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
        </Text>
      </View>
      {/* Elevated Card7 */}
    <View style={styles.elevatedCard7}>
     <Text style={styles.cardText}>
      Show continiue's {"\n"}
     <Text style={styles.timingText7}>{"\n"} 01.30 pm to 02.00 PM{"\n"} </Text>
     <Text style={styles.briefText7}> {"\n"}{"Dive back into the dynamic expo environment,where exibition dazzle and visitors discover a wealth of innovation and growth prospectus."}{"\n"}
      </Text>
     </Text>
    </View>
     {/* Description10 */}
     <View>
  <Text style={styles.upcomingDescription10} className="text-black text-center">
    02.00 pm
    <Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
  </Text>
</View>
      {/* Elevated Card8 */}
    <View style={styles.elevatedCard8}>
     <Text style={styles.cardText}>
      Speed networking {"\n"}
     <Text style={styles.timingText8}>{"\n"} 02.00 pm to 02.30 PM{"\n"} </Text>
     <Text style={styles.briefText8}> {"\n"}{"Engage in second round of speed networking,broadning horizons and opening door's to new synergies and ventures."}{"\n"}
      </Text>
     </Text>
    </View>
    {/* Description11 */}
    <View>
        <Text style={styles.upcomingDescription11} className="text-black  text-center">
          02.30 pm<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
        </Text>
      </View>
      {/* Elevated Card9 */}
    <View style={styles.elevatedCard9}>
     <Text style={styles.cardText}>
      Show continue {"\n"}
     <Text style={styles.timingText9}>{"\n"} 02.30 pm to 03.30 PM{"\n"} </Text>
     <Text style={styles.briefText9}> {"\n"}{"Uncover fresh insights,forge connections,and explore the myroid offering as the expo buzzes with energy and oppurtunity."}{"\n"}
      </Text>
     </Text>
    </View>
      {/* Description12 */}
    <View>
        <Text style={styles.upcomingDescription12} className="text-black  text-center">
          03.30 pm<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
        </Text>
      </View>
      {/* Elevated Card10 */}
    <View style={styles.elevatedCard10}>
     <Text style={styles.cardText}>
      Panel discussion {"\n"}
     <Text style={styles.timingText10}>{"\n"} 03.30 pm to 04.30 PM{"\n"} </Text>
     <Text style={styles.briefText10}> {"\n"}{"Join industry thought leaders in a captivating panel discussion on charting a course through evolving business landscapes."}{"\n"}
      </Text>
     </Text>
    </View>
    {/* Description13 */}
    <View>
        <Text style={styles.upcomingDescription13} className="text-black  text-center">
          04.30 pm<Text style={{ color: 'grey', fontSize: 12}}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
        </Text>
      </View>
      {/* Elevated Card10 */}
    <View style={styles.elevatedCard11}>
     <Text style={styles.cardText}>
      Show breakdown {"\n"}
     <Text style={styles.timingText11}>{"\n"} 04.30 pm onwards{"\n"} </Text>
     <Text style={styles.briefText11}> {"\n"}{"As the sun sets on an exhilarating day,exibitore gracefullydismantle their showcases,making the end of an expo filled with inspiration,connections,and growth prospectus."}{"\n"}
      </Text>
     </Text>
    </View>
    </ScrollView>
  )
}

export default Agenda

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 15,
  },
  upcomingDescription: {
    textAlign: 'center',
    color: 'black',
    fontSize:10,
    padding:15,
  },
  upcomingDescription2: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 500,
    fontSize:20,
    marginTop: 5,
  },
  upcomingDescription3: {
    textAlign: 'center',
    color: 'black',
    fontSize:14,
    fontWeight: 400,
    marginTop: 20,
},
upcomingDescription4: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#E8ECFF',
  borderRadius: 6,
 
  
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},

upcomingDescription5: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard2: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#FFE8EB',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText2: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText2: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText2: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription6: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
combinedCard: {
  marginTop: 20,
  marginLeft: 20,
  marginBottom: 18,
  padding: 5,
  height: 260, // Adjust height to accommodate the combined content
  width: 350, // Keep consistent with other cards
  backgroundColor: '#F1E8FF',
  borderRadius: 10,
 
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Ensure text remains in flow
},

elevatedCard3: {
  marginTop:20,
  marginLeft:20,
  padding: 5,
  height:150,
  width: 350, // Adjust width as necessary
  backgroundColor: '#E8F8FF',
  borderRadius: 10,
  
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText3: {
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
},
timingText3: {
  fontSize: 12, // Adjust the size as needed
  fontWeight: 'bold', // Optional, for emphasis
  marginTop: 8, // Adds margin between the two lines
},
briefText3: {
  fontSize: 14, // Adjust the size as needed
  padding:10,
  marginTop: 8, // Adds margin between the two lines
},
elevatedCard4: {
  marginTop:10,
  marginBottom:18,
  marginLeft:20,
  padding: 5,
  height:150,
  width: 350, // Adjust width as necessary
  backgroundColor: '#E8F8FF',
  borderRadius: 10,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText4: {
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
},
timingText4: {
  fontSize: 12, // Adjust the size as needed
  fontWeight: 'bold', // Optional, for emphasis
  marginTop: 8, // Adds margin between the two lines
},
briefText4: {
  fontSize: 14, // Adjust the size as needed
  padding:10,
  marginTop: 8, // Adds margin between the two lines
},
upcomingDescription7: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard5: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#E8F8FF',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText5: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText5: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText5: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},

upcomingDescription8: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard6: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#F5FFE8',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText6: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText6: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText6: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription9: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard7: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#FFE8EB',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText7: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText7: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText7: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription10: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard8: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#F1E8FF',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText8: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText8: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText8: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription11: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard9: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#E8F8FF',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText9: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText9: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText9: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription12: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard10: {
  margin: 20,
  padding: 5,
  height:130,
  width: 350, // Adjust width as necessary
  backgroundColor: '#F5FFE8',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText10: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText10: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText10: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
upcomingDescription13: {
  textAlign: 'left',
  color: 'black',
  fontSize:12,
  marginLeft:20,
  fontWeight: 500,
  marginTop: 20,
},
elevatedCard11: {
  margin: 20,
  padding: 5,
  height:150,
  width: 350, // Adjust width as necessary
  backgroundColor: '#F1E8FF',
  borderRadius: 6,
 
  shadowColor: '#000',
  shadowOpacity: 2,
  shadowRadius: 4,
  alignItems: 'flex-start',
  flexDirection: 'row', // Optional, to ensure text stays on one line
},

cardText11: {
  fontSize: 14,
  color: 'black',
  padding:5,
  fontWeight: 700,
  textAlign: 'left', // Align text to the left
},
timingText11: {
  fontSize: 10,
  fontWeight: 500,
  marginTop: 8,
  textAlign: 'left', // Align text to the left
},
briefText11: {
  fontSize: 12,
  padding: 10,
  marginTop: 8,
  fontWeight:300,
  textAlign: 'left', // Align text to the left
},
});
