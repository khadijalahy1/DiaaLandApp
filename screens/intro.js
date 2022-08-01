import React from 'react'
import { View, Text,  StyleSheet, Alert, Button } from 'react-native'
import { styles as mystyles } from '../assets/styles'

class Intro extends React.PureComponent {

  render() {
    return (
     <View style={mystyles.IntroContainer} >
        <Text style={mystyles.IntroText}>

            DiaaLand 
        </Text>
        <Text style={mystyles.introCopyRight}>
            By DiaaLand @CopyRight2022
        </Text>
 


     </View>
      
      

     



    )
  }
}




export default Intro