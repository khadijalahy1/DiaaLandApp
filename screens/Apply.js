import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles as mystyles } from "../assets/styles";
import FooterV1 from "../components/footerV1";
import WebView from "react-native-webview";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import * as RootNavigation from '../navigation/RootNavigation'


//styles of the webview
//get the hashcode from description and include it in the link

const tagsStyles = {
  body: {
    paddingLeft:'5%',
    paddingRight:'5%'
    

  }
}



class Apply extends React.PureComponent {

  render() {
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
         <View style={mystyles.descriptionHeader}>
            <TouchableOpacity style={mystyles.backBtn} onPress={()=>{RootNavigation.navigate('Drawer')}}>
              <Image source={require("../assets/back.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={mystyles.homeBtn} onPress={()=>{RootNavigation.navigate('Drawer')}}>
              <Image source={require("../assets/home.png")} />
            </TouchableOpacity>
          </View>
      <WebView 
        source={{ uri: 'https://www.careers-page.com/diaaland/job/'+this.props.route.params.applyCode+'/apply' }} 
      />
    </SafeAreaView>
        
         
       

          
      
        
 
    );
  }
}

export default Apply;