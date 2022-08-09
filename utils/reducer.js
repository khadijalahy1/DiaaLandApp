import { combineReducers } from 'redux';

const INITIAL_STATE = {
    myFavoris:{1:{position_name:'Developer',location_display:'Otawa,Canada'}}
};

const favorisReducer = (state = INITIAL_STATE, action) => {
  var newState;
  switch (action.type) {
    case 'ADD_OFFER':
        //add the offer to my favoris
        var { myFavoris} = state;
        var offer=action.payload;
        myFavoris[offer.id]=offer;
        newState={myFavoris};
        break;

    case 'REMOVE_OFFER':
        //remove the offer from my favorites
        var {myFavoris}=state;
        var offerId=action.payload;
        delete myFavoris[offerId];
        newState={myFavoris};
        break;

    default:
        newState={state}
      
  }
  return newState;
};

export default combineReducers({
  favoris: favorisReducer
});