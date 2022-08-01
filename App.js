import 'react-native-gesture-handler';
import Intro from './screens/intro' ;
import Navigation from './navigation/navigation';
import React from 'react'

export default class App extends React.Component {
constructor(props){
 super(props)
 this.state = {
  component : <Intro />
 }
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <Navigation/> })
     }, 5000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
}

render() {
return (
  this.state.component
);}

}