import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import Logo from "./src/Images/logo1.svg";

const App = () => {
  return (
    <View style={styles.mainaprent}>
      <View style={styles.mainveiw}>
        <Image
          source={require('./src/Images/1st.png')}
          style={{width: 359, height: 359, top: -196, left: -98}}></Image>
        <Image
          source={require('./src/Images/2nd.png')}
          style={{width: 467, height: 300, top: -376, left: 183}}></Image>
      </View>

      <View style={styles.subparent}>
        {/* <Image
          source={require('./src/Images/logo1.svg')}
          style={{width: 200, height: 200}}></Image> */}
          <Logo width={120} height={40} />
      </View>

      <Image
        source={require('./src/Images/eight.png')}
        style={{width: 466, height: 466}}></Image>
      <Image
        source={require('./src/Images/seven.png')}
        style={{width: 359, height: 359}}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  mainaprent: {
    flex: 1,
    backgroundColor: 'white',
  },
  subparent: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    marginHorizontal: 100,
    marginVertical: 150,
  },
  mainveiw: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
  },
});

export default App;
