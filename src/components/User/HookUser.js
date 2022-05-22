import React, { useEffect } from 'react'
import {fetchUser} from '../Actions/Actions'
import {useSelector, useDispatch} from 'react-redux'

function HookUser() {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchUser())
    }, [dispatch])
    
  return (
    <div>
        <h2>User List</h2>
        <div>
            {userData.map(each =>(
                <li>{each.username}</li>
            ))}
        </div>
    </div>
  )
}

export default HookUser