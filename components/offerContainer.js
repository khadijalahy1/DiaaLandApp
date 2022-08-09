import React from 'react'
import { View, Text,  StyleSheet, Alert, Button,Image,TouchableOpacity } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';


export class OfferContainer extends React.PureComponent {

  render() {
    return (
        <TouchableOpacity  style={mystyles.offerContainer} onPress={this.props.onPress}>
            <View style={mystyles.offerContainer1}>
                <Text style={mystyles.offerTitle}>
                    {this.props.title}
                </Text>
                <Text style={mystyles.offerLocation}>
                    {this.props.location}
                </Text>
            </View>
            <View style={mystyles.offerContainer2}>
                <Image style={mystyles.heart} source={require('../assets/heart.png')}/>
                <Image source={require('../assets/forbidden.png')}/>
            </View>
        </TouchableOpacity>
    )
  }
}


OfferContainer.propTypes={
    title:PropTypes.string,
    location:PropTypes.string,
    onPress:PropTypes.func
}
