import React from 'react'

const Antonyms = (props) => {
    if(props.antonyms.length!==0){
        return (
            <div >Antonyms: {(props.antonyms).map((item,index)=>(
            <span key={index} style={{margin:"10px", opacity:"0.7"}}>{item}</span>
        ))}
            </div>
          )
      }
      else{
          return null;
      }
}

export default Antonyms