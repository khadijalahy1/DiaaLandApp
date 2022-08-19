import "react-native-gesture-handler";
import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/feed";
import Favoris from "../screens/Favoris";
import { styles as mystyles } from "../assets/styles";
import AddOffer from "../screens/addOffer";
import About from "../screens/aboutUs";
import { RFPercentage } from "react-native-responsive-fontsize";

const Drawer = createDrawerNavigator();
const defaultOptions = ({ navigation }) => ({
  headerTitle: "DiaaLand",
  headerStyle: {
    backgroundColor: "#E7ECEF",
  },
  headerTintColor: "#274C77",
  headerShadowVisible: true,
  drawerPosition: "right",
  headerLeft: () => <Text></Text>,

  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        source={require("../assets/menu.png")}
        style={mystyles.drawerIcon}
      />
    </TouchableOpacity>
  ),
});

/*

navigation 
   - drawer
   - description

   data
   offer --> Feed --> drawer --> stack


*/

export default class DrawerNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer.Navigator

      screenOptions={{
        drawerStyle:{
          backgroundColor:'white',
          width:'70%'
        },
        drawerType:'front',
        drawerItemStyle:{
          borderColor:'#8B8C89',
          borderWidth:1

        },
        drawerLabelStyle:{
          color:'#274C77',
          fontWeight:'bold',
          fontSize:RFPercentage(2)
        },
        drawerActiveBackgroundColor:'#E7ECEF'
      }}
  
      >
        <Drawer.Screen
          name="Offers"
          component={() => <Feed offers={this.props.offers} />}
          options={defaultOptions}
        />
        <Drawer.Screen
          name="Saved jobs"
          component={Favoris}
          options={defaultOptions}
        />

        <Drawer.Screen
          name="Post An Offer"
          component={AddOffer}
          options={defaultOptions}
        />
        
        <Drawer.Screen
          name="About Us"
          component={About}
          options={defaultOptions}
        />
      </Drawer.Navigator>
    );
  }
}
