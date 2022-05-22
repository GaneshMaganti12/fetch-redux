import React, {useEffect} from 'react'
import {fetchUser} from '../Actions/Actions'
import {connect} from 'react-redux'

function User(props) {
    useEffect(() =>{
        props.fetchData()
    }, [])
  return (
      <div>
          <h1>User List</h1>
          <ul>
              {props.userData.map(each =>(
                  <li>{each.name}</li>
              ))}
          </ul>
      </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchData: () => dispatch(fetchUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)