import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "./RootNavigation";

import { createStore } from "redux";
import favorisReducer from "../utils/reducer";
import Description from "../screens/Description";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./drawerNavigation";
import Apply from "../screens/Apply";
import InternalScreen from '../screens/internalScreen'

//to view later
const Stack = createStackNavigator();
const store = createStore(favorisReducer);

export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("In Navigation", this.props.offers);
  }

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={() => <DrawerNavigation offers={this.props.offers} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Apply"
            component={Apply}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Internal"
            component={InternalScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*
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
                </Drawer.Navigator>;
              }*/
