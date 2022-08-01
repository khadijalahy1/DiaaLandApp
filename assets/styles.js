
import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({

//Intro Styles

IntroContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
},
IntroText:{
    color:'#274C77',
    textShadowColor:'A3CEF1',
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    textAlign:'center',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
},
introCopyRight:{
    width:'100%',
    color:"#8B8C89",
    fontSize:RFPercentage(2),
    position:'absolute',
    bottom:'10%',
    textAlign:'center'

},

// drawerNavigator
drawerIcon:{
   
    marginRight:'5%'
},

//Footer
footerContainer:{
    width:'100%',
    height:'10%',
    backgroundColor:'#E7ECEF',
    
},
footerText:{
    color:'#8B8C89',
    textAlign:'left',
    marginLeft:'5%',
    marginTop:'20%',
    fontSize:RFPercentage(2) 
},
//Feed
feedContainer:{
    flex:1,
 
    backgroundColor:'#E7ECEF'
}





})