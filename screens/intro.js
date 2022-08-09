import React from 'react'
import { View, Text,  StyleSheet,ActivityIndicator, Alert, Button } from 'react-native'
import { styles as mystyles } from '../assets/styles'


class Intro extends React.PureComponent {

  render() {
    return (
     <View style={mystyles.IntroContainer} >
        <Text style={mystyles.IntroText}>
            DiaaLand 
        </Text>
        <ActivityIndicator size="small" color="#8B8C89" />

        <Text style={mystyles.introCopyRight}>
            By DiaaLand @CopyRight2022
        </Text>

     </View>

    )
  }
}




export default Intro