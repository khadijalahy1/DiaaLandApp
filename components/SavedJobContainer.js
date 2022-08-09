import React from 'react'
import { View, Text,  StyleSheet, Alert, Button,TouchableOpacity,Image} from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';

export default class SavedJobContainer extends React.PureComponent {

  render() {
    return (
        <View style={mystyles.favorisTicketContainer}>
           
            <View style={mystyles.favorisTicketContainer1}>
                <Text style={mystyles.favorisTitle}>{this.props.title}</Text>
                <Text style={mystyles.favorisLocation}>{this.props.location}</Text>
                <TouchableOpacity style={mystyles.favorisApply} onPress={this.props.onPress}>
                    <Text style={mystyles.favorisApplyText}>
                    Apply now 
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={mystyles.favorisTicketContainer2}>
                   <TouchableOpacity style={mystyles.closebtnContainer}>
                   <Image style={mystyles.closebtn} source={require('../assets/cancel.png')}/>

                   </TouchableOpacity>
                    
             

            </View>




        </View>
 
      


    )
  }
}

SavedJobContainer.propTypes={
    title:PropTypes.string,
    location:PropTypes.string,
    onPress:PropTypes.func,
}



