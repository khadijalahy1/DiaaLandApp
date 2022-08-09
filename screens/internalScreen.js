import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
 
const ScreenInternal = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Switch Screen out of the Navigation Drawer
            {'\n\n'}
            This is Internal Screen
          </Text>
          <Button
            title="Go Back"
            onPress={() => navigation.navigate('Description')}
          />
        </View>
        <Text style={styles.footerHeading}>
          React Navigation Drawer with Sectioned Menu
        </Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
 
export default ScreenInternal;