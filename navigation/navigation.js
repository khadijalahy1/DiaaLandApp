import * as React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/feed";
import { Icon, Image, TouchableOpacity,Text } from "react-native";
import { styles as mystyles } from '../assets/styles'



const Drawer = createDrawerNavigator();
const defaultOptions = ({ navigation }) => ({
  headerTitle:'DiaaLand',
  headerStyle: {
    backgroundColor: "#E7ECEF",
    
  },
  headerTintColor: "#274C77",
  headerShadowVisible:true,
  drawerPosition:'right',
  headerLeft: () => (
    <Text>
   
    </Text>
  ),
  
  headerRight: () => (
    <TouchableOpacity onPress ={ ( ) => navigation.openDrawer()}>
      <Image source={require("../assets/menu.png")} style={mystyles.drawerIcon} />
    </TouchableOpacity>
  )

});
export default function Navigation() {
  
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Offres d'emplois "
          component={Feed}
          options={defaultOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
