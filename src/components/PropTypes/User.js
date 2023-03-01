import React from 'react'
import PropTypes from "prop-types"

const User = (props) => {
  return (
    <div>
      
       <h1>{props.userName}</h1> 
       <h3>{props.userId}</h3> 

    </div>
  )
}

User.propTypes = {

    userName:PropTypes.string,
    userId:PropTypes.number,

}

User.defaultProps={

    userName:"default name",
    userId:0,

}

export default User
