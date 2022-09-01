import React from 'react'
import { View, Text,  StyleSheet, Alert, Button,Image,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';

export default class FilterTab extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
  }


  render() {
    return (
        <View style={mystyles.FilterBarContainer}>
            <TouchableOpacity style={mystyles.filterIcon} >
            <Image  style={mystyles.filterIcon} source={require('../assets/location-pin.png')}/>
            </TouchableOpacity>
            <TextInput style={mystyles.searchBarText} placeholder="Ville,Rue,Pays" onChangeText={(value) => this.props.parentReference(value)}/>
        </View>      
    )
  }
}
FilterTab.propTypes={
  parentReference:PropTypes.func
}


