import React from "react";
import { SafeAreaView, ScrollView, Text ,View} from "react-native";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";
// add redux
import { connect } from "react-redux";
import { addOffer, deleteOffer } from "../features/reducer";
import SavedJobContainer from "../components/SavedJobContainer";
import * as RootNavigation from "../navigation/RootNavigation";



//edge case no offer Nothing saved

class Favoris extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  list = () => {
    if (Object.keys(this.props.saved).length == 0) {
      return (
        <View style={mystyles.savedNoneContainer}>
          <Text style={mystyles.savedNoneText}>There is no job saved :/</Text>
        </View>
      );

    }
    return Object.keys(this.props.saved).map((id) => {
      var job = this.props.saved[id];
      return (
       
        <SavedJobContainer
          title={job.position_name}
          location={job.location_display}
          onPress={() =>
            RootNavigation.navigate("Apply", {
              
              applyCode: job.hash
            })
          }
          onDelete={() => {
            this.props.deleteOffer(job.id);
          }}
        />
      );
    });
   
  };

  render() {
  
    return (
      <SafeAreaView style={mystyles.favorisContainer}>
        <ScrollView style={mystyles.favorisContainer}>{this.list()}</ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}

//redux configuration

const mapStateToProps = (state) => ({
  saved: state.saved.value,
});

const mapDispatchToProps = { addOffer, deleteOffer };

export default connect(mapStateToProps, mapDispatchToProps)(Favoris);
