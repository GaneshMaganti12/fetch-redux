import {Fetch_Response} from "../Actions/ActionType"

const initialState = {
    user: [],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case Fetch_Response: return {...state, user: action.payload}
        default:
            return state
    }
}

export default reducer