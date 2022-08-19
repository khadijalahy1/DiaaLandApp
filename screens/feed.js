import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";
import { OfferContainer } from "../components/offerContainer";
import SearchTab from "../components/searchTab";
import FilterTab from "../components/filterTab";
import ModalFilterPicker from "react-native-modal-filter-picker";
import * as RootNavigation from '../navigation/RootNavigation';
// add redux
import { connect } from "react-redux";
import {addOffer,deleteOffer} from '../features/reducer';



/*

- display gif while loading data
- adjust the bottom to have a fixed height

-> from offers get  a set of  country,city  {{country:,city:} ...}
-> construct  the component
-> implement the backend 

*/


class Feed extends React.PureComponent {
  constructor(props) {
    super(props);
    

    this.state = {
      offers: [],
      prevLink: "",
      locations: [],
      filterVisible: false,
      picked: null,
    };
  }

  componentDidMount() {
    this.setState(
      {
        offers: this.props.offers,
      },
      () => {
        this.getAllLocations();
      }
    );
  }

  // save the job


  //delete the job
  onDelete=(id)=>{
    this.setState({
      offers:this.state.offers.filter(elt => elt.id !=id)
    
    })
  }


  //get All locations
  getAllLocations = () => {
    var locations = [];
    var seen = new Set();
    this.state.offers.map((offer) => {
      var city = offer.city;
      var country = offer.country;
      if (seen.has(city) == false) {
        seen.add(city);
        locations.push({ key: city, label: country + " , " + city });
      }
    });
    this.setState({
      locations: locations,
    });
  };
  // a function that retrieves all data
  getAllData = () => {
    return fetch(this.state.currentLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            offers: responseJson.results,
            dataReady: true,
            nextLink: responseJson.next,
            prevLink: responseJson.previous,
          },
          () => {
            this.getAllLocations();
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
  search = (text) => {
    return fetch(
      "https://api.manatal.com/open/v3/career-page/diaaland/jobs/?page_size=1000&search=" +
        text
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('search');
        this.setState({
          offers: responseJson.results,
        });
      });
  };

  //filter methods

  onSelect = (picked) => {
    console.log("entered select");
    return fetch(
      "https://api.manatal.com/open/v3/career-page/diaaland/jobs/?city__icontains=casa"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          offers: responseJson.results,
          filterVisible: false,
        });
      });
  };

  onCancel = () => {
    this.setState({
      filterVisible: !this.state.filterVisible,
    });
  };


 
  list = () => {
    return this.state.offers.map((element) => {
      return (
        <OfferContainer
          title={element.position_name}
          location={element.location_display}
          onPress={()=>RootNavigation.navigate('Description',{ title:element.position_name,location:element.location_display,description:element.description,applyCode:element.hash })}
          onDelete={()=>this.onDelete(element.id)}
        />
      );
    });
  };
  

  //

  //list of all offers
  

  render() {

    return (
      <SafeAreaView style={mystyles.feedContainer}>
        <ScrollView style={mystyles.scroll}>
          <View style={mystyles.searchTabContainer}>
          

              <SearchTab onRef={ref => (this.parentReference = ref)} parentReference = {this.search.bind(this)}/>
            <FilterTab onPress={this.onCancel} />
             
          </View>
          <View style={mystyles.offersContainer}>
            <View style={mystyles.offersLabel}>
              <Text style={mystyles.offersLabelText}>Offres</Text>
            </View>
            <View style={mystyles.offersMainTicket}>{this.list()}</View>
          </View>

          

       
         
        </ScrollView>
        <Footer />
        
        <ModalFilterPicker
          visible={this.state.filterVisible}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          options={this.state.locations}
          overlayStyle={{
            backgroundColor: "#E7ECEF",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            paddingTop: "20%",
            paddingLeft: "15%",
          }}
          listContainerStyle={{
            borderColor: "#8B8C89",
            borderWidth: 2,
            width: "80%",
            height: "70%",
            backgroundColor: "white",
          }}
          cancelContainerStyle={{
            marginTop: "5%",
            width: "40%",
            marginLeft: "20%",
          }}
        />
           
        
      
      
      </SafeAreaView>
    );
  }
}

//redux configuration

const mapStateToProps = (state) => ({
  saved: state.saved.value,
});

const mapDispatchToProps = {addOffer,deleteOffer };

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

