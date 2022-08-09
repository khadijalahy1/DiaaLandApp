import React from 'react'
import { View, Text,  StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';

export default class CustomButton extends React.PureComponent {

  render() {
    return (
     <TouchableOpacity style={mystyles.CustomButton} onPress={this.props.onPress} >
      <Text style={mystyles.CustomButtonText}>
      {this.props.title}

      </Text>
    

     </TouchableOpacity>
      
    )
  }
}



CustomButton.propTypes={
    title:PropTypes.string,
    onPress:PropTypes.func
}




