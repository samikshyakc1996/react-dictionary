import React from 'react'

const Example = (props) => {
    if(props.example){
        return (
    <div><em>Example: {props.example}</em></div>
  )
    }
    else{
        return null;
    }
  
}

export default Example