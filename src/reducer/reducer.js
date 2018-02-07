//App imports
import {ADD_USER, 
        ADD_USER_TODO} from '../actions/types'; 

//reducer 
export const reducer = (state, action) => {

    console.log("in reducer"); //debug

    switch(action.type) {
        case ADD_USER:
            console.log("reducer - ADD_USER"); //debug
            return {...state, 
                userList: state.userList.concat(action.payload)}; //using array.concat to generate new array without mutating the source data elements
        //break;
        case ADD_USER_TODO: 
            console.log("reducer - ADD_USER_TODO"); //debug
            return {...state, 
                itemList: state.itemList.concat(action.payload), //using array.concat to generate new array without mutating the source data elements
                nextItemId: state.nextItemId + 1}; //increment to next todo ID
        //break;
        default: //should always have - code first - should always return current state
            console.log("reducer - default"); //debug
            return state;

    }//end switch
}// end dossierReducer

//only exporting one element as the default element
export default reducer;