import React from 'react'
import { View, Text,  StyleSheet, Alert, Button,Image,TouchableOpacity } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';

var blue='../assets/heartb.png';
var white='../assets/heart.png';
export class OfferContainer extends React.PureComponent {

renderImage= () => {
        console.log('entered render image');
        console.log(this.props.heartb);
        if (this.props.heartb==true) {
          return <Image style={mystyles.heart} source={require(blue)}/>;
        } else {
          return <Image style={mystyles.heart} source={require(white)}/>;
        }
      }


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
                <TouchableOpacity onPress={this.props.onSave}>
                    
                {this.renderImage()}
                    

                
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onDelete}>
                <Image source={require('../assets/forbidden.png')}/>
                </TouchableOpacity>               
            </View>
        </TouchableOpacity>
    )
  }
}
OfferContainer.propTypes={
    title:PropTypes.string,
    location:PropTypes.string,
    onPress:PropTypes.func,
    onSave:PropTypes.func,
    onDelete:PropTypes.func,
    heartb:PropTypes.bool
}
