import React from 'react'
import { View, Text,  StyleSheet, Alert, Button,Image,TextInput,TouchableOpacity} from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';

export default class SearchTab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
  }


  render() {
  

    return (
        <View style={mystyles.searchBarContainer}>
          <TouchableOpacity style={mystyles.barIcon}  onPress={this.props.parentReference(this.state.value)}>
          <Image  style={mystyles.barIcon} source={require('../assets/loupe.png')}/>
          </TouchableOpacity>
          <TextInput style={mystyles.searchBarText} placeholder=" titre de l'emploi ou nom d'entreprise ou mot clés"
          onSubmitEditing={(value) => this.props.parentReference(value)}
          onChangeText={(value)=>this.setState({value:value})}
          />
          
            
        </View>      
    )
  }
}

SearchTab.prototype={
  parentReference:PropTypes.func
}


