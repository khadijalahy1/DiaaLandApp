import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";
import SavedJobContainer from "../components/SavedJobContainer";
import { connect } from "react-redux";

class Favoris extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  //remove offer



  //list of all saved offers
 /* list = () => {
   var myObject=this.props.favoris.myFavoris;
   return Object.keys(myObject).map((element) => {
    return (
      <SavedJobContainer
        title={element.position_name}
        location={element.location_display}

      />
    );
  });
  };*/

  render() {
    return (
      <SafeAreaView style={mystyles.favorisContainer}>
        <ScrollView style={mystyles.favorisContainer}>
          {/*this.list()*/}
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const { favoris } = state;
  return { favoris };
};

export default connect(mapStateToProps)(Favoris);
