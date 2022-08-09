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
    marginBottom:'10%'
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
   
    backgroundColor:'#E7ECEF',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    
    height:80,
    paddingTop:'5%',
    
    borderColor:'#E7ECEF',
    borderTopWidth:2

   
    

    
},
footerContainer1:{
    backgroundColor:'white',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    
    height:80,
    paddingTop:'5%',
    
    borderColor:'white',
    borderTopWidth:2
   

},
footerText:{
    color:'gray',
    textAlign:'center',
    marginLeft:'5%',
    
 
    fontSize:RFPercentage(2) 
},

//scroll
scrollV:{
    flex:2,
    width:'100%'

},
//Feed
scroll:{
width:'100%'
},
feedContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'white'
},
searchTabContainer:{
    flex:2.2,
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    backgroundColor:'#E7ECEF'
},
offersContainer:{
    flex:14,
    backgroundColor:'#FFFFFF',
    borderColor:'#8B8C89',
   
    width:'100%'
},
offersLabel:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-start',
    borderColor:'#8B8C89',
    borderTopWidth:1,
    borderBottomWidth:1
    

    
},
offersLabelText:{
    color:'#274C77',
    fontWeight:'bold',
    marginLeft :'10%',
    fontSize:RFPercentage(2.5)

}
,
offersMainTicket:{
    flex:11,
    width:'100%',
    alignItems:'center'

    

},
//offerContainer
offerContainer:{
    width:'90%',
    height:130,
    flexDirection:'row',
    borderBottomColor:'gray',
    borderRadius:3,
    borderWidth:1,
    marginTop:'3%',
 
    marginBottom:'2%'

},
offerContainer1:{
    flex:5,
    marginLeft:'2%'

},

offerContainer2:{
    flex:2,
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginTop:'5%',
    marginRight:'2.5%'
   

},
offerTitle:{
  flex:3,
  color:'#274C77',
  fontSize:RFPercentage(2),
  textAlign:'center',
  fontWeight:'bold',
  marginTop:'5%'
},
offerLocation:{
    flex:2,
    color:'#6096BA',
    fontSize:RFPercentage(2),
    textAlign:'center',
   marginLeft:'10%'


},
heart:{
    marginBottom:'3%'
},
//searchBar
searchBarContainer:{
    width:'90%',
    height:'40%',
    borderColor:'gray',
    borderWidth:1,
    borderTopLeftRadius:3,
    borderTopRightRadius:3,
    flexDirection:'row',
    backgroundColor:'white'
},
barIcon:{
    marginTop:'1%',
    marginLeft:'3%'
   

},
filterIcon:{
    marginTop:'2%',
    marginLeft:'9%',
   
    
}
,
searchBarText:{
    color:'#8B8C89',
    flex: 8

},
//filterBar
FilterBarContainer:{
    width:'90%',
    height:'40%',
    borderColor:'gray',
    borderWidth:1,
    borderBottomLeftRadius:3,
    borderBottomRightRadius:3,
    flexDirection:'row',
    backgroundColor:'white'
},
FilterBarText:{
    color:'#8B8C89'

},

//CustomButton

CustomButton:{
    width:'30%',
    height:40,
    backgroundColor:'#274C77',
    color:'white',
    justifyContent:'center',
    alignItems:'center'
},
CustomButtonText:{
    textAlign:'center',
    color:'white'
},
ButtonsContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:'5%',
    marginBottom:'5%'

   

},

//favoris
favorisContainer:{
    width:'100%',
    backgroundColor:'white',
    height:'100%'

},

//favorisTicket

favorisTicketContainer:{
    width:'100%',
    height:150,
    borderColor:'#8B8C89',
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection:'row'

},
favorisTicketContainer1:{
    width:'80%',
    marginLeft:'5%',
    justifyContent:'center',
    alignItems:'center'

   

},
favorisTitle:{
    color:'#274C77',
    fontSize:RFPercentage(2),
    fontWeight:'bold',
    marginBottom:'3%'
},
favorisLocation:{
    color:'#A3CEF1',
    fontSize:RFPercentage(2),
    fontWeight:'bold',
    marginBottom:'2%'
},
favorisApply:{
    width:'45%',
    height:'15%',
    backgroundColor:'#274C77',
    justifyContent:'center',
    alignItems:'center'
},
favorisApplyText:{
    color:'white'

},
favorisTicketContainer2:{
    width:'100%',
    paddingTop:'5%'
   
},
closebtnContainer:{
    width:'100%',
    height:'20%'
}
,
closebtn:{
  height:'100%',
  paddingLeft:'10%'

},
//Description

descriptionContainer:{
    width:'100%',
    backgroundColor:'white',
    height:'100%'

},
descriptionHeader:{
    width:'100%',
    flexDirection:'row',
    height:70,
    paddingRight:'15%',
    marginBottom:'1%'
},
backBtn:{
    width:'100%',
    marginLeft:'2%',
    marginTop:'3%'

},

homeBtn:{
    width:'100%',
    marginRight:'8%',
    marginTop:'2.5%'
},
descriptionTextContainer:{
    width:'90%',
    marginLeft:'5%'
},
descriptionTitle:{
    fontWeight:'bold',
    color:'#274C77',
    fontSize:RFPercentage(2.5),
    marginBottom:'2%'
},
descriptionLocation:{
    color:'#8B8C88',
    fontSize:RFPercentage(2),
    marginBottom:'5%'
},
descriptionText:{
    color:'black',
    backgroundColor:'pink'
},
ButtonsContainer:{
    width: '100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'5%',
    paddingBottom:'5%'

}
,
descriptionBtn:{
    backgroundColor:'#274C77',
    width:'80%',
    height:40,
    marginBottom:'5%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
    
},
descriptionBtnTxt:{
    textAlign:'center',
    color:'white',
    fontWeight:'600'

},

//Webview 

WebView:{
    width:'80%',
    height:'30%',
    backgroundColor:'pink'
}























})