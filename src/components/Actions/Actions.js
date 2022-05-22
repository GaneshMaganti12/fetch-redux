import { Fetch_Response} from "./ActionType"

export const fetchUser = () =>{
    return async(dispatch) =>{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        dispatch({type: Fetch_Response, payload: data})
    }
}