import "react-native-gesture-handler";
import Intro from "./screens/intro";
import Navigation from "./navigation/navigation";
import React from "react";
// add redux
import { Provider } from "react-redux";
import { store } from "./features/store";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      offers: [],
    };
  }

  componentDidMount() {
    //fetch data -> update offers state
    this.getAllData();
  }

  getAllData = () => {
    return fetch(
      "https://api.manatal.com/open/v3/career-page/diaaland/jobs/?page_size=1000"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            offers: responseJson.results,
          },
          () => {
            this.setState({ dataLoaded: true });
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    if (this.state.dataLoaded) {
      //pass offers to navigation
      return (
        <Provider store={store}>
          <Navigation offers={this.state.offers} />
        </Provider>
      );
    } else {
      return <Intro />;
    }
  }
}
