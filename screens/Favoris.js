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

class Favoris extends React.PureComponent {
  constructor(props) {
    super(props);
  }


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


//redux configuration

const mapStateToProps = (state) => ({
  saved: state.saved.value,
});

const mapDispatchToProps = {addOffer,deleteOffer };

export default connect(mapStateToProps, mapDispatchToProps)(Favoris);
