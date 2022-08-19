import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles as mystyles } from "../assets/styles";
import FooterV1 from "../components/footerV1";
import RenderHtml from "react-native-render-html";
import * as RootNavigation from '../navigation/RootNavigation';
// add redux
import { connect } from "react-redux";
import {addOffer,deleteOffer} from '../features/reducer';
//styles of the webview

const tagsStyles = {
  body: {
    paddingLeft:'5%',
    paddingRight:'5%'
    

  }
}

class Description extends React.PureComponent {

  render() {
    
    return (
      <SafeAreaView style={mystyles.descriptionContainer}>
        <ScrollView style={mystyles.descriptionContainer}>
          <View style={mystyles.descriptionHeader}>
            <TouchableOpacity style={mystyles.backBtn} onPress={()=>{RootNavigation.navigate('Drawer')}}>
              <Image source={require("../assets/back.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={mystyles.homeBtn} onPress={()=>{RootNavigation.navigate('Drawer')}}>
              <Image source={require("../assets/home.png")} />
            </TouchableOpacity>
          </View>
          <View style={mystyles.descriptionTextContainer}>
            <Text style={mystyles.descriptionTitle}>
              {this.props.route.params.title}
            </Text>
            <Text style={mystyles.descriptionLocation}>{this.props.route.params.location}</Text>
          </View>
          <RenderHtml
            contentWidth={'80%'}
            source={{
              html:this.props.route.params.description,
            }}
            tagsStyles={tagsStyles}
          />

          <View style={mystyles.ButtonsContainer}>
            <TouchableOpacity style={mystyles.descriptionBtn}
             onPress={() => {
              RootNavigation.navigate("Apply",{applyCode:this.props.route.params.applyCode});
            }}
            
            >
              <Text style={mystyles.descriptionBtnTxt}>Apply Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={mystyles.descriptionBtn}
              onPress={()=>{this.props.addOffer(this.props.route.params.offer)}}
             
            >
              <Text style={mystyles.descriptionBtnTxt}>Save the job</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
        <FooterV1 />
        
      </SafeAreaView>
    );
  }
}

//redux configuration

const mapStateToProps = (state) => ({
  saved: state.saved.value,
});

const mapDispatchToProps = {addOffer,deleteOffer };

export default connect(mapStateToProps, mapDispatchToProps)(Description);
