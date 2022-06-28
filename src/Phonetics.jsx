import React from 'react'
import PhoneticAudio from './PhoneticAudio';

const Phonetics = (props) => {
    if(props.phonetic){
        return (
    <div>
        {/* <audio src={props.phonetic.audio}>Listen</audio> */}
        <PhoneticAudio audio={props.phonetic.audio}/>
        {/* <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a> */}
        <p>{props.phonetic.text}</p>
    </div>
  )
    }
    else{
        return null;
    }
  
}

export default Phonetics