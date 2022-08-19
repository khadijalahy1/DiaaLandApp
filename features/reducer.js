/*

- initial state : empty dictionary 

- functionnalities :
    - add to saved (offer)(key : idOffer(int) , val : offer(object) )
    - delete From saved (key:idOffer)
*/
import { createSlice} from '@reduxjs/toolkit';


const counterSlice=createSlice({
    name:'saved',
    initialState: {
        value:{},
      },
    reducers:{
        //add functions here
        //add friend
        addOffer(state,action){
            console.log('entered add offer');
            console.log(action.payload);
            var offer=action.payload;
            state.value[offer.id]=offer;
        },

        //delete friend
        deleteOffer(state,action){
            console.log('entered delete offer');
            console.log(action.payload);
            delete state.value[action.payload];
            

        }
    }
})

export const {addOffer,deleteOffer}=counterSlice.actions;
export default counterSlice.reducer;