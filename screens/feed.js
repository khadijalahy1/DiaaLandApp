import React from 'react'
import { View, Text,  StyleSheet, Alert, Button } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';



class Feed extends React.PureComponent {
  render() {
 
    return (
     <View style={mystyles.feedContainer} >
      <Footer/>
        

     </View>

    )
  }
}

// Wrap and export
export default function (navigation) {
  return <Feed />;
}






