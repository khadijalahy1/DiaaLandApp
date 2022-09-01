import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import WebView from "react-native-webview";
import { styles as mystyles } from "../assets/styles";
import Footer from "../components/footer";
import ExpoFastImage from "expo-fast-image";
class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      informations: [
        "Ingénieur d'Etat en IT (diplôme INPT 2005)",
        "15 ans d'experience en IT",
        "Membre de l'association MACM",
        "Membre de l'équipe d'organisation des olympiades de l'informatique au Maroc",
        "Directeur de la compétition nationale de la programmation MCPC",
      ],
      about:
        "DiaaLand is a Recruiting platform.We help companies to seek good candidates, we help also good candidates to enhance their chance to get the best opportunities based not only on the résumé but also on what matter: Technical skills and soft skills.Depend on the position the candidates may be invited to some technical assessments before the first interview",
    };
  }

  list = () => {
    return this.state.informations.map((info) => {
      return (
        <Text style={mystyles.aboutText}>
          {"\u2B20" + " "}
          {info}{" "}
        </Text>
      );
    });
  };

  render() {
    return (
      <ScrollView style={mystyles.aboutMain}>
        <ExpoFastImage
          uri='https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/diaaland.jpg?alt=media&token=e6bd86a4-96c4-4058-ba5e-e9c2172a852d' // image address
          cacheKey="diaal" // could be a unque id
          style={mystyles.aboutImage} // your custom style object
          // any supported props by Image
        />
       
        <View style={mystyles.aboutDiv}>
          <Text style={mystyles.aboutTitle}>About Diaa Alhak EL FALLOUS</Text>
          {this.list()}
        </View>
        <View style={mystyles.aboutDiv}>
          <Text style={mystyles.aboutTitle}>About DiaaLand</Text>
          <Text style={mystyles.aboutText}>{this.state.about}</Text>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

export default About;
