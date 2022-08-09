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
import WebView from "react-native-webview";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";

class AddOffer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        
          <WebView
            source={{
              uri:'https://docs.google.com/forms/d/e/1FAIpQLSes8yf7D4O_8tXzWjIYudWuKioQwmpLozu_5FKJu3DNPNz2Yw/viewform',
            }}
          />

          <Footer />
       
      </SafeAreaView>


    );
  }
}

export default AddOffer;
