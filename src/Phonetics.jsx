import React from 'react'
import PhoneticAudio from './PhoneticAudio';

const Phonetics = (props) => {
    if(props.phonetic){
        return (
    <div>
        {/* <audio src={props.phonetic.audio}>Listen</audio> */}
        <PhoneticAudio audio={props.phonetic.audio}/>
        {/* <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a> */}
        <p style={{opacity:"0.7", color:"#000", fontWeight:"500", lineHeight:"1em", margin:"8px 0"}}>{props.phonetic.text}</p>
    </div>
  )
    }
    else{
        return null;
    }
  
}

export default Phonetics