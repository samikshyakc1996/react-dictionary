import React from 'react'

const Synonyms = (props) => {

  if(props.synonyms.length>0){
    return (
        <div>Synonyms:
            {(props.synonyms).map((item,index)=>(
                <span key={index} style={{margin:"10px", opacity:"0.7"}}>{item}</span>
            ))}
    
    
        </div>
      )
  }
  else{
      return null;
  }
    
}

export default Synonyms