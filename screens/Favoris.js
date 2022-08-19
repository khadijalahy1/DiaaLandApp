import React from "react";
import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";
// add redux
import { connect } from "react-redux";
import {addOffer,deleteOffer} from '../features/reducer';
import SavedJobContainer from "../components/SavedJobContainer";
import * as RootNavigation from '../navigation/RootNavigation';

class Favoris extends React.PureComponent {
  constructor(props) {
    super(props);
  
  
  }

  list = () => {
    return Object.keys(this.props.saved).map((id) => {
      var job=this.props.saved[id];
      return (
        <SavedJobContainer 
        title={job.position_name}
        location={job.location_display}
        onPress={()=>RootNavigation.navigate('Description',{ title:job.position_name,location:job.location_display,description:job.description,applyCode:job.hash })}
        
        
        />

       
      );
    });
  };


  render() {
    return (
      <SafeAreaView style={mystyles.favorisContainer}>
        <ScrollView style={mystyles.favorisContainer}>
          {this.list()}
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}


//redux configuration

const mapStateToProps = (state) => ({
  saved: state.saved.value,
});

const mapDispatchToProps = {addOffer,deleteOffer };

export default connect(mapStateToProps, mapDispatchToProps)(Favoris);
