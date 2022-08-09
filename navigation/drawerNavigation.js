import "react-native-gesture-handler";
import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/feed";
import Favoris from "../screens/Favoris";
import { styles as mystyles } from "../assets/styles";
import ScreenInternal from "../screens/internalScreen";
import AddOffer from "../screens/addOffer";

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
      <Drawer.Navigator>
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
      </Drawer.Navigator>
    );
  }
}
