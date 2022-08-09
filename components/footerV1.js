import React from 'react'
import { View, Text,  StyleSheet, Alert, Button } from 'react-native'
import { styles as mystyles } from '../assets/styles'

class FooterV1 extends React.PureComponent {

  render() {
    return (
     <View style={mystyles.footerContainer1} >
        <Text style={mystyles.footerText}>
            By DiaaLand @CopyRight2022
        </Text>
     </View>
      


    )
  }
}




export default FooterV1