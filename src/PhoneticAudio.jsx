import React from 'react'

const PhoneticAudio = (props) => {
    // console.log("props from audio",props);
    if(props.audio!==""){
        return (
            <div>
                <a href={props.audio} target="_blank" rel="noreferrer">Pronounciation</a>
            </div>
        )
    }
    else{
        return null;
    }
  
}

export default PhoneticAudio