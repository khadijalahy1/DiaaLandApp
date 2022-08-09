import React from "react";
import { View, Text, StyleSheet, Alert, Button, ScrollView,FlatList,SafeAreaView, StatusBar} from "react-native";
import { styles as mystyles } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/footer";
import {OfferContainer} from "../components/offerContainer";
import SearchTab from "../components/searchTab";
import FilterTab from "../components/filterTab";
import Intro from "./intro";

export default class ScrollV extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      dataReady: false,
    };
  }
  componentDidMount() {
    this.getAllData();
    
  }

  getAllData = () => {
    return fetch(
      "https://api.manatal.com/open/v3/career-page/diaaland/jobs/?page=2"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("--------------------------------------------");

        this.setState({
          offers: responseJson.results,
          dataReady: true,
        });
        console.log(this.state.offers);
        this.state.offers.map((offer) => {
          console.log(offer.position_name);
          console.log(offer.location_display);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  list = () => {
    return this.state.offers.map((element) => {
      return (
        <OfferContainer title={element.position_name} location={element.location_display}/>
      );
    });
  };


  list1=()=>{
    return this.state.offers.map((element) => {
        return (
          <View style={styles.card}>
            <Text>
                {element.position_name}
            </Text>
          </View>
        );
      });

  }


  render() {
    if (this.state.dataReady == false) {
      return <Intro />;
    } else {
      return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.list()}

        </ScrollView>
      </SafeAreaView>
          
      );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    card:{
       
        width:'100%',
        height: 200
    }
  });
